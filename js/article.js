document.addEventListener('DOMContentLoaded', function() {
    const courseContent = {
        resume: {
            title: '无经验如何撰写简历？',
            time: '2小时',
            views: '3200+学习',
            rating: '4.9分',
            content: `
                <p>作为商科学生，即使没有正式工作经验，也可以通过挖掘校园经历、项目经验和技能特长，打造一份让HR眼前一亮的简历。</p>
                
                <h3>一、简历结构框架</h3>
                <p>一份优秀的简历应包含以下核心板块：</p>
                <ul>
                    <li><strong>个人信息</strong>：姓名、联系方式、邮箱（建议使用专业邮箱）</li>
                    <li><strong>教育背景</strong>：学校、专业、GPA（如优秀）、相关课程</li>
                    <li><strong>实习/项目经历</strong>：按重要性排序，使用STAR法则描述</li>
                    <li><strong>校园活动</strong>：学生会、社团、竞赛等经历</li>
                    <li><strong>技能证书</strong>：语言能力、计算机技能、专业证书</li>
                </ul>
                
                <h3>二、STAR法则详解</h3>
                <p>描述经历时，使用STAR法则让内容更有说服力：</p>
                <ul>
                    <li><strong>Situation（情境）</strong>：描述项目背景和挑战</li>
                    <li><strong>Task（任务）</strong>：说明你的具体职责</li>
                    <li><strong>Action（行动）</strong>：详细描述你采取的行动</li>
                    <li><strong>Result（结果）</strong>：量化成果，突出影响力</li>
                </ul>
                
                <h3>三、无经验如何挖掘亮点</h3>
                <p>即使没有实习经历，以下经历同样有价值：</p>
                <ul>
                    <li>课程项目：金融建模、市场调研、案例分析报告</li>
                    <li>学科竞赛：案例分析大赛、商业模拟挑战赛</li>
                    <li>学生组织：活动策划、团队管理、外联赞助</li>
                    <li>志愿服务：体现社会责任感和软技能</li>
                </ul>
                
                <h3>四、简历优化技巧</h3>
                <ul>
                    <li>使用动词开头：分析、策划、协调、优化、达成</li>
                    <li>数据说话：提升XX%、节省XX小时、管理XX人团队</li>
                    <li>针对性调整：根据岗位要求突出相关经历</li>
                    <li>排版简洁：一页纸原则，字体统一，间距适中</li>
                </ul>
            `
        },
        research: {
            title: '行研报告撰写',
            time: '4小时',
            views: '2100+学习',
            rating: '4.8分',
            content: `
                <p>行业研究是商科学生必备的核心技能，无论是求职面试还是实际工作，都需要产出高质量的行研报告。</p>
                
                <h3>一、行研报告框架</h3>
                <p>一份完整的行研报告应包含：</p>
                <ul>
                    <li><strong>行业概述</strong>：行业定义、发展历程、产业链分析</li>
                    <li><strong>市场规模</strong>：市场容量、增长率、细分市场占比</li>
                    <li><strong>竞争格局</strong>：主要玩家、市场份额、竞争态势</li>
                    <li><strong>商业模式</strong>：盈利模式、成本结构、核心壁垒</li>
                    <li><strong>发展趋势</strong>：政策影响、技术变革、未来展望</li>
                </ul>
                
                <h3>二、信息收集渠道</h3>
                <ul>
                    <li><strong>官方数据</strong>：国家统计局、行业协会、上市公司年报</li>
                    <li><strong>研究报告</strong>：券商研报、咨询报告、第三方研究机构</li>
                    <li><strong>新闻资讯</strong>：财经媒体、行业媒体、企业公告</li>
                    <li><strong>一手调研</strong>：专家访谈、问卷调查、实地考察</li>
                </ul>
                
                <h3>三、分析方法论</h3>
                <ul>
                    <li><strong>PEST分析</strong>：政治、经济、社会、技术环境分析</li>
                    <li><strong>波特五力</strong>：供应商、买家、替代品、新进入者、竞争者</li>
                    <li><strong>SWOT分析</strong>：优势、劣势、机会、威胁</li>
                    <li><strong>对比分析</strong>：国内外对比、历史对比、企业对比</li>
                </ul>
                
                <h3>四、报告撰写技巧</h3>
                <ul>
                    <li>数据可视化：善用图表，让数据说话</li>
                    <li>逻辑清晰：由宏观到微观，层层递进</li>
                    <li>观点鲜明：每个板块都要有核心结论</li>
                    <li>引用规范：标注数据来源，增强可信度</li>
                </ul>
            `
        },
        data: {
            title: '金融数据分析',
            time: '6小时',
            views: '1800+学习',
            rating: '4.7分',
            content: `
                <p>数据分析能力是金融从业者的核心竞争力，掌握Excel和Python将大大提升工作效率。</p>
                
                <h3>一、Excel核心技能</h3>
                <ul>
                    <li><strong>函数应用</strong>：VLOOKUP、INDEX-MATCH、SUMIFS、IF嵌套</li>
                    <li><strong>数据透视表</strong>：快速汇总、分组分析、动态报表</li>
                    <li><strong>图表制作</strong>：柱状图、折线图、散点图、组合图</li>
                    <li><strong>财务建模</strong>：DCF估值、敏感性分析、情景分析</li>
                </ul>
                
                <h3>二、Python数据分析</h3>
                <ul>
                    <li><strong>Pandas</strong>：数据清洗、转换、聚合、合并</li>
                    <li><strong>NumPy</strong>：数值计算、矩阵运算</li>
                    <li><strong>Matplotlib/Seaborn</strong>：数据可视化、图表美化</li>
                    <li><strong>数据获取</strong>：API接口、爬虫技术、数据库连接</li>
                </ul>
                
                <h3>三、金融数据应用场景</h3>
                <ul>
                    <li><strong>财务分析</strong>：财务比率计算、杜邦分析、现金流分析</li>
                    <li><strong>投资分析</strong>：收益率计算、风险度量、组合优化</li>
                    <li><strong>信用分析</strong>：违约概率预测、信用评分模型</li>
                    <li><strong>量化策略</strong>：因子分析、回测框架、策略优化</li>
                </ul>
                
                <h3>四、学习路径建议</h3>
                <ul>
                    <li>第一阶段：精通Excel，能独立完成财务建模</li>
                    <li>第二阶段：学习Python基础，掌握Pandas数据处理</li>
                    <li>第三阶段：结合金融场景，完成实战项目</li>
                    <li>第四阶段：深入机器学习，提升分析深度</li>
                </ul>
            `
        },
        interview: {
            title: '行业导师访谈',
            time: '3小时',
            views: '950+学习',
            rating: '4.9分',
            content: `
                <p>与资深从业者面对面交流，是获取行业洞察、明确职业方向的最佳途径。</p>
                
                <h3>一、访谈准备</h3>
                <ul>
                    <li><strong>背景调研</strong>：了解导师的教育背景、职业轨迹、所在行业</li>
                    <li><strong>问题设计</strong>：准备开放性问题，避免是非题</li>
                    <li><strong>时间预约</strong>：提前沟通，尊重对方时间</li>
                    <li><strong>资料准备</strong>：简历、笔记本、录音设备（需征得同意）</li>
                </ul>
                
                <h3>二、访谈问题框架</h3>
                <ul>
                    <li><strong>职业发展</strong>：您是如何进入这个行业的？职业发展路径是怎样的？</li>
                    <li><strong>工作内容</strong>：日常工作主要包括哪些？最具挑战性的部分是什么？</li>
                    <li><strong>能力要求</strong>：这个岗位需要哪些核心能力？新人最容易欠缺什么？</li>
                    <li><strong>行业洞察</strong>：行业发展趋势如何？未来有哪些机会和挑战？</li>
                    <li><strong>求职建议</strong>：对于想进入这个行业的同学，您有什么建议？</li>
                </ul>
                
                <h3>三、访谈技巧</h3>
                <ul>
                    <li>积极倾听：专注对方讲述，适时追问</li>
                    <li>做好笔记：记录关键信息和观点</li>
                    <li>保持谦逊：虚心请教，表达感谢</li>
                    <li>控制时间：按时结束，不过度打扰</li>
                </ul>
                
                <h3>四、访谈后续</h3>
                <ul>
                    <li>整理笔记：及时整理访谈内容，形成文档</li>
                    <li>感谢信：发送感谢邮件，保持联系</li>
                    <li>行动计划：根据建议制定个人提升计划</li>
                    <li>持续跟进：定期更新进展，维护关系</li>
                </ul>
            `
        }
    };

    function getQueryParam(param) {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get(param);
    }

    const articleId = getQueryParam('id');
    const article = courseContent[articleId];

    if (article) {
        document.getElementById('articleTitle').textContent = article.title;
        document.getElementById('articleTime').textContent = article.time;
        document.getElementById('articleViews').textContent = article.views;
        document.getElementById('articleRating').textContent = article.rating;
        document.getElementById('articleContent').innerHTML = article.content;
        document.getElementById('pageTitle').textContent = article.title;
        document.title = article.title + ' - 龙马职路';
    } else {
        document.getElementById('articleTitle').textContent = '课程未找到';
        document.getElementById('articleContent').innerHTML = '<p>抱歉，该课程内容暂未上线，请关注公众号获取最新动态。</p>';
    }
});
