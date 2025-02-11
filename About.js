document.addEventListener("DOMContentLoaded", () => {
    const textElements = document.querySelectorAll(".fade-in-text");

    textElements.forEach((element, index) => {
        setTimeout(() => {
            element.style.opacity = "1";
            element.style.transform = "translateY(0)";
        }, index * 1000); // 1 second delay between each text
    });
});
