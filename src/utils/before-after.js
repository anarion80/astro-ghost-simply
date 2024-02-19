export default function beforeAfter() {
    const beforeAfterCards = [
        ...document.querySelectorAll(".kg-before-after-card"),
    ];

    function updateDimensions(images) {
        const imageWidth = getComputedStyle(images[0]).getPropertyValue(
            "width"
        );

        images[1].setAttribute("style", `width: ${imageWidth}`);
    }

    function updateSlider(overlay, button, input) {
        overlay.setAttribute("style", `width: ${input.value}%`);
        button.setAttribute("style", `left: calc(${input.value}% - 18px`);
    }

    for (let card of beforeAfterCards) {
        const input = card.querySelector("input");
        const overlay = card.querySelector(
            ".kg-before-after-card-image-before"
        );
        const button = card.querySelector(
            ".kg-before-after-card-slider-button"
        );
        const images = [...card.querySelectorAll("img")];

        input.addEventListener("input", function () {
            updateSlider();
        });

        input.addEventListener("change", function () {
            input.blur();
        });

        window.addEventListener("resize", function () {
            updateDimensions(images);
        });

        updateDimensions(images);
        updateSlider(overlay, button, input);
    }
}
