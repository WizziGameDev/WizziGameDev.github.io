
// Memperbaiki scroll dan navigasi agar page sesuai

document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-container ul li a");

    navLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault();

            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                const offset = targetElement.offsetTop - document.querySelector(".nav-container header").offsetHeight;

                window.scrollTo({
                    top: offset,
                    behavior: "smooth",
                });
            }
        });
    });
});
