const texts = ["Web Developer", "Software Developer"];
const typewriterEl = document.getElementById("typewriter");

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

const TYPING_SPEED   = 100;
const DELETING_SPEED = 60;
const PAUSE_AFTER    = 1800;
const PAUSE_BEFORE   = 400;

function type() {
    const currentText = texts[textIndex];

    if (!isDeleting) {
        typewriterEl.textContent = currentText.slice(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, PAUSE_AFTER);
            return;
        }
        setTimeout(type, TYPING_SPEED);

    } else {
        typewriterEl.textContent = currentText.slice(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, PAUSE_BEFORE);
            return;
        }
        setTimeout(type, DELETING_SPEED);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, 600);
});