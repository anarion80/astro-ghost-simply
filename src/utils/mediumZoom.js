import mediumZoom from "medium-zoom";
import docSelectorAll from "./getAll";

export default function mediumZoomImg() {
    docSelectorAll(".post-body img").forEach(
        el => !el.closest("a") && el.classList.add("simply-zoom")
    );

    mediumZoom(`.simply-zoom`, {
        margin: 20,
        background: `hsla(0,0%,100%,.85)`,
    });
}
