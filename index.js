document.addEventListener("DOMContentLoaded", function () {
    // Contact Modal
    const contactModal = document.getElementById("contactModal");
    const contactBtn = document.getElementById("contactBtn");
    const contactClose = contactModal.querySelector(".close");
    const contactForm = document.getElementById("contactForm");
    const resultMessage = document.getElementById("result");

    contactBtn.addEventListener("click", () => {
        contactModal.style.display = "flex";
    });

    contactClose.addEventListener("click", () => {
        contactModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === contactModal) {
            contactModal.style.display = "none";
        }
    });

    // Contact Form Submission
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault();
        resultMessage.textContent = "Sending...";
        
        setTimeout(() => {
            resultMessage.textContent = "Thank you for your message!";
            contactForm.style.display = "none"; // Hide the form after submission
        }, 1000);
    });

    // About Section Expand/Collapse
    const aboutSummary = document.getElementById("about-summary");
    const aboutFull = document.getElementById("about-full");
    const readMoreBtn = document.getElementById("toggleAbout");
    const readLessBtn = document.getElementById("toggleAboutLess");

    readMoreBtn.addEventListener("click", () => {
        aboutSummary.style.display = "none";
        aboutFull.style.display = "block";
    });

    readLessBtn.addEventListener("click", () => {
        aboutSummary.style.display = "block";
        aboutFull.style.display = "none";
    });

    // Flyer Modals
    const flyerImages = document.querySelectorAll(".flyer-img");
    flyerImages.forEach(img => {
        const modalId = img.getAttribute("data-modal");
        const modal = document.getElementById(modalId);
        const modalClose = modal.querySelector(".close");

        img.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        modalClose.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    });
});