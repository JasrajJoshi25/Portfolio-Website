document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById("hamburger");
    const navbar    = document.getElementById("navbar");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navbar.classList.toggle("open");
    });

    navbar.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navbar.classList.remove("open");
        });
    });

    document.addEventListener("click", (e) => {
        if (!navbar.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove("active");
            navbar.classList.remove("open");
        }
    });
});