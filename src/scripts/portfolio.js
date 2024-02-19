const filterBtn = document.querySelectorAll(`.js-filter-btn`);

function filterSelection(str) {
    const allCard = document.querySelectorAll(`.js-filter-items`);
    if (!allCard.length) {
        return;
    }

    for (let i = 0; i < allCard.length; i++) {
        const portfolioCard = allCard[i];

        portfolioCard.classList.add(`hidden`);
        if (portfolioCard.getAttribute(`data-id`) === str || str === `all`) {
            portfolioCard.classList.remove(`hidden`);
        }
    }
}

filterBtn.forEach(btn => {
    btn.addEventListener(`click`, function (e) {
        e.preventDefault();
        const current = document.querySelector(`.js-filter-btn.border-primary`);
        current.classList.remove(`border-primary`);
        this.classList.add(`border-primary`);
        const dataFilter = btn.getAttribute(`data-id`);
        filterSelection(dataFilter.split(` `).join(`-`).toLowerCase());
    });
});
