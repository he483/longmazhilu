document.addEventListener('DOMContentLoaded', function () {
    var cards = document.querySelectorAll('.skill-card');

    cards.forEach(function (card) {
        var summary = card.querySelector('.skill-summary');

        summary.addEventListener('click', function () {
            var isExpanded = card.classList.contains('expanded');

            if (isExpanded) {
                card.classList.remove('expanded');
            } else {
                card.classList.add('expanded');
                setTimeout(function () {
                    card.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        });
    });
});
