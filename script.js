// Cycle through background images
document.addEventListener("DOMContentLoaded", function() {
    const hero = document.querySelector(".hero");
    let images = ["images/bg1.jpg", "images/bg2.jpg", "images/bg3.jpg"];
    let index = 0;

    // Change the background image every 5 seconds
    setInterval(() => {
        index = (index + 1) % images.length;
        hero.style.transition = "background-image 1s ease-in-out"; // Smooth transition
        hero.style.backgroundImage = `url(${images[index]})`;
    }, 5000);

    // Scrollable text animation
    const scrollingText = document.querySelector(".scrolling-text");
    let textContent = scrollingText.innerHTML;
    let scrollIndex = 0;

    setInterval(() => {
        if (scrollIndex < textContent.length) {
            scrollingText.innerHTML += textContent[scrollIndex];
            scrollIndex++;
        } else {
            scrollingText.innerHTML = ""; // Reset and start over
            scrollIndex = 0;
        }
    }, 100); // Speed of text scroll

    // Optional: Form validation for the sign-up form
    const form = document.querySelector("form");
    form.addEventListener("submit", function(event) {
        const name = form.querySelector('input[name="name"]');
        const email = form.querySelector('input[name="email"]');
        const message = form.querySelector('textarea[name="message"]');
        
        if (!name.value || !email.value || !message.value) {
            alert("Please fill out all fields before submitting.");
            event.preventDefault();
        } else {
            alert("Form submitted successfully!");
        }
    });
});
