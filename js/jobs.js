// ============================================================
// Supabase 配置 — 请替换为你自己的 Supabase 项目信息
// 在 https://supabase.com 创建项目后，在 Settings > API 中获取
// ============================================================
const SUPABASE_URL = 'YOUR_SUPABASE_URL';
const SUPABASE_ANON_KEY = 'YOUR_SUPABASE_ANON_KEY';

const supabase = window.supabase && SUPABASE_URL !== 'YOUR_SUPABASE_URL'
    ? supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY)
    : null;

const industryLabels = {
    finance: '金融',
    internet: '互联网',
    consulting: '咨询',
    convert: '可转正'
};

const companyIcons = [
    'fa-building', 'fa-chart-line', 'fa-mobile-alt', 'fa-utensils',
    'fa-shield-alt', 'fa-coins', 'fa-hand-holding-usd', 'fa-landmark',
    'fa-file-contract', 'fa-chart-pie', 'fa-bank', 'fa-globe',
    'fa-rocket', 'fa-gem', 'fa-bolt', 'fa-lightbulb'
];

function randomIcon() {
    return companyIcons[Math.floor(Math.random() * companyIcons.length)];
}

function escapeHtml(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
}

// ============================================================
// 动态渲染岗位卡片
// ============================================================
function renderJobCard(job, isNew) {
    const card = document.createElement('div');
    card.className = 'job-card' + (isNew ? ' new-highlight' : '');
    card.dataset.tags = job.industry || '';

    const tags = job.industry
        ? `<span class="tag tag-${escapeHtml(job.industry)}">${industryLabels[job.industry] || escapeHtml(job.industry)}</span>`
        : '';

    const detailsHTML = [];
    if (job.location) detailsHTML.push(`<span><i class="fas fa-map-marker-alt"></i> ${escapeHtml(job.location)}</span>`);
    if (job.duration) detailsHTML.push(`<span><i class="fas fa-clock"></i> ${escapeHtml(job.duration)}</span>`);
    if (job.education) detailsHTML.push(`<span><i class="fas fa-graduation-cap"></i> ${escapeHtml(job.education)}</span>`);

    const applyHTML = [];
    if (job.apply_email) {
        applyHTML.push(`<p><strong>投递邮箱：</strong><a href="mailto:${escapeHtml(job.apply_email)}">${escapeHtml(job.apply_email)}</a></p>`);
    }
    if (job.apply_format) {
        applyHTML.push(`<p><strong>邮件格式：</strong>${escapeHtml(job.apply_format)}</p>`);
    }

    const descHTML = job.description
        ? `<div class="job-section"><h4 class="section-title">详细描述</h4><p>${escapeHtml(job.description).replace(/\n/g, '<br>')}</p></div>`
        : '';

    card.innerHTML = `
        <div class="job-summary">
            <div class="job-header">
                <span class="company-logo"><i class="fas ${randomIcon()}"></i></span>
                <div class="job-info">
                    <h3>${escapeHtml(job.title || '')}</h3>
                    <p class="company">${escapeHtml(job.company || '')}</p>
                </div>
            </div>
            <div class="job-tags">${tags}</div>
            <div class="job-details">${detailsHTML.join('')}</div>
            <p class="job-desc">${escapeHtml(job.summary || '')}</p>
            <div class="expand-hint"><i class="fas fa-chevron-down"></i> 点击查看详情</div>
        </div>
        <div class="job-detail">
            <h2 class="company-name">${escapeHtml((job.company || '') + ' - ' + (job.title || ''))}</h2>
            ${descHTML}
            ${applyHTML.length ? '<div class="apply-info">' + applyHTML.join('') + '</div>' : ''}
        </div>
    `;

    bindCardEvents(card);
    return card;
}

// ============================================================
// 绑定卡片交互事件
// ============================================================
function bindCardEvents(card) {
    card.addEventListener('click', function(e) {
        if (e.target.closest('.apply-info a')) return;

        if (card.classList.contains('expanded')) {
            card.classList.remove('expanded');
            return;
        }

        const allCards = document.querySelectorAll('.job-card');
        allCards.forEach(c => c.classList.remove('expanded'));
        card.classList.add('expanded');

        setTimeout(() => {
            card.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    });
}

// ============================================================
// 从 Supabase 加载岗位
// ============================================================
async function loadSupabaseJobs() {
    if (!supabase) return;

    const container = document.getElementById('jobsGrid');
    const existingCards = container.querySelectorAll('.job-card');

    try {
        const { data, error } = await supabase
            .from('jobs')
            .select('*')
            .order('created_at', { ascending: false });

        if (error) {
            console.error('Supabase 加载失败:', error.message);
            return;
        }

        data.forEach(job => {
            const card = renderJobCard(job, false);
            container.appendChild(card);
        });
    } catch (err) {
        console.error('Supabase 连接失败:', err.message);
    }
}

// ============================================================
// 弹窗逻辑
// ============================================================
function setupPublishModal() {
    const modal = document.getElementById('publishModal');
    const publishBtn = document.getElementById('publishBtn');
    const closeBtn = document.getElementById('closeModal');
    const cancelBtn = document.getElementById('cancelBtn');
    const form = document.getElementById('publishForm');

    function openModal() {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        form.reset();
        clearErrors();
    }

    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    publishBtn.addEventListener('click', openModal);
    closeBtn.addEventListener('click', closeModal);
    cancelBtn.addEventListener('click', closeModal);

    modal.addEventListener('click', function(e) {
        if (e.target === modal) closeModal();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });

    form.addEventListener('submit', handleSubmit);
}

// ============================================================
// 表单校验
// ============================================================
function clearErrors() {
    document.querySelectorAll('.form-group input.error, .form-group select.error, .form-group textarea.error')
        .forEach(el => el.classList.remove('error'));
    document.querySelectorAll('.error-msg.visible')
        .forEach(el => el.classList.remove('visible'));
}

function showError(id, message) {
    const el = document.getElementById(id);
    if (el) el.classList.add('error');
    let msgEl = el && el.parentElement.querySelector('.error-msg');
    if (!msgEl && el) {
        msgEl = document.createElement('div');
        msgEl.className = 'error-msg';
        el.parentElement.appendChild(msgEl);
    }
    if (msgEl) {
        msgEl.textContent = message;
        msgEl.classList.add('visible');
    }
}

function validateForm() {
    clearErrors();
    let valid = true;

    const company = document.getElementById('company').value.trim();
    const title = document.getElementById('title').value.trim();
    const industry = document.getElementById('industry').value;
    const summary = document.getElementById('summary').value.trim();
    const email = document.getElementById('applyEmail').value.trim();

    if (!company) { showError('company', '请填写公司名称'); valid = false; }
    if (!title) { showError('title', '请填写岗位标题'); valid = false; }
    if (!industry) { showError('industry', '请选择行业标签'); valid = false; }
    if (!summary) { showError('summary', '请填写岗位简述'); valid = false; }
    if (!email) {
        showError('applyEmail', '请填写投递邮箱');
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        showError('applyEmail', '邮箱格式不正确');
        valid = false;
    }

    return valid;
}

// ============================================================
// 表单提交
// ============================================================
async function handleSubmit(e) {
    e.preventDefault();

    if (!validateForm()) return;

    if (!supabase) {
        showToast('Supabase 尚未配置，请先设置 SUPABASE_URL 和 SUPABASE_ANON_KEY');
        return;
    }

    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> 提交中...';

    const jobData = {
        company: document.getElementById('company').value.trim(),
        title: document.getElementById('title').value.trim(),
        industry: document.getElementById('industry').value,
        location: document.getElementById('location').value.trim(),
        duration: document.getElementById('duration').value.trim(),
        education: document.getElementById('education').value.trim(),
        summary: document.getElementById('summary').value.trim(),
        description: document.getElementById('description').value.trim(),
        apply_email: document.getElementById('applyEmail').value.trim(),
        apply_format: document.getElementById('applyFormat').value.trim()
    };

    try {
        const { error } = await supabase.from('jobs').insert([jobData]);

        if (error) {
            showToast('提交失败：' + error.message);
            submitBtn.disabled = false;
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> 提交岗位';
            return;
        }

        const container = document.getElementById('jobsGrid');
        const card = renderJobCard(jobData, true);
        container.insertBefore(card, container.firstChild);

        document.getElementById('publishModal').classList.remove('active');
        document.body.style.overflow = '';
        form.reset();
        showToast('岗位发布成功！');

        setTimeout(() => {
            card.classList.remove('new-highlight');
        }, 1500);
    } catch (err) {
        showToast('网络错误，请稍后重试');
    }

    submitBtn.disabled = false;
    submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> 提交岗位';
}

// ============================================================
// 搜索与筛选（兼容硬编码卡片 + 动态卡片）
// ============================================================
function setupFilters() {
    const filterTags = document.querySelectorAll('.filter-tag');
    const jobSearch = document.getElementById('jobSearch');
    const searchBtn = document.getElementById('searchBtn');

    filterTags.forEach(tag => {
        tag.addEventListener('click', function() {
            filterTags.forEach(t => t.classList.remove('active'));
            this.classList.add('active');

            const filter = this.dataset.filter;
            const cards = document.querySelectorAll('.job-card');

            cards.forEach(card => {
                card.classList.remove('expanded');
                if (filter === 'all') {
                    card.style.display = '';
                } else {
                    const tags = card.dataset.tags || '';
                    card.style.display = tags.includes(filter) ? '' : 'none';
                }
            });
        });
    });

    function handleSearch() {
        const term = (jobSearch.value || '').trim().toLowerCase();
        const cards = document.querySelectorAll('.job-card');

        if (!term) {
            cards.forEach(c => { c.style.display = ''; c.classList.remove('expanded'); });
            return;
        }

        let found = false;
        cards.forEach(card => {
            card.classList.remove('expanded');
            if (card.textContent.toLowerCase().includes(term)) {
                card.style.display = '';
                found = true;
            } else {
                card.style.display = 'none';
            }
        });

        if (!found) showToast('未找到匹配的岗位，请尝试其他关键词');
    }

    if (searchBtn) searchBtn.addEventListener('click', handleSearch);
    if (jobSearch) jobSearch.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') handleSearch();
    });
}

// ============================================================
// 初始化
// ============================================================
document.addEventListener('DOMContentLoaded', async function() {
    document.querySelectorAll('.job-card').forEach(bindCardEvents);
    setupFilters();
    setupPublishModal();
    await loadSupabaseJobs();
});
