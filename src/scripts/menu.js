document
    .querySelector(`.js-menu-toggle`)
    .addEventListener(`click`, function (e) {
        e.preventDefault();
        document.body.classList.toggle(`has-menu`);
    });
document.querySelector(`.nav-mob-wrap`).addEventListener(`click`, function () {
    //e.preventDefault()
    document.body.classList.toggle(`has-menu`);
});
