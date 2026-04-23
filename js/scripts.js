document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('.menu-filter-btn');
    const cocktailItems = document.querySelectorAll('.cocktail-item');
    const flipCards = document.querySelectorAll('.flip-card-btn');

    flipCards.forEach(function (card) {
        card.addEventListener('click', function () {
            const isFlipped = card.classList.toggle('is-flipped');
            card.setAttribute('aria-pressed', isFlipped ? 'true' : 'false');
        });
    });

    filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            const filter = button.dataset.filter;

            filterButtons.forEach(function (btn) {
                btn.classList.remove('active');
            });
            button.classList.add('active');

            cocktailItems.forEach(function (item) {
                const category = item.dataset.category;
                const card = item.querySelector('.flip-card-btn');

                if (filter === 'all' || category === filter) {
                    item.style.display = '';
                } else {
                    item.style.display = 'none';

                    if (card) {
                        card.classList.remove('is-flipped');
                        card.setAttribute('aria-pressed', 'false');
                    }
                }
            });
        });
    });
});