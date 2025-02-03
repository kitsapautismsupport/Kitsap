document.addEventListener("DOMContentLoaded", function () {
    // Accessibility Modal
    const accessibilityModal = document.getElementById("accessibilityModal");
    const accessibilityBtn = document.getElementById("accessibilityBtn");
    const accessibilityClose = document.querySelector(".accessibility-close");

    if (accessibilityModal && accessibilityBtn && accessibilityClose) {
        accessibilityBtn.addEventListener("click", () => {
            accessibilityModal.style.display = "block";
        });

        accessibilityClose.addEventListener("click", () => {
            accessibilityModal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === accessibilityModal) {
                accessibilityModal.style.display = "none";
            }
        });
    }

    // Contact Modal
    const contactModal = document.getElementById("contactModal");
    const contactBtn = document.getElementById("contactBtn");
    const contactClose = document.querySelector(".contact-close");

    if (contactModal && contactBtn && contactClose) {
        contactBtn.addEventListener("click", () => {
            contactModal.style.display = "block";
        });

        contactClose.addEventListener("click", () => {
            contactModal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === contactModal) {
                contactModal.style.display = "none";
            }
        });
    }

    // About Section Expand/Collapse
    const aboutSummary = document.getElementById("about-summary");
    const aboutFull = document.getElementById("about-full");
    const readMoreBtn = document.getElementById("toggleAbout");
    const readLessBtn = document.getElementById("toggleAboutLess");

    if (aboutSummary && aboutFull && readMoreBtn && readLessBtn) {
        readMoreBtn.addEventListener("click", () => {
            aboutSummary.style.display = "none";
            aboutFull.style.display = "block";
        });

        readLessBtn.addEventListener("click", () => {
            aboutSummary.style.display = "block";
            aboutFull.style.display = "none";
        });
    }

    // Contact Form Submission
    const form = document.getElementById("contactForm");
    const result = document.getElementById("result");

    form.addEventListener("submit", async function (e) {
        e.preventDefault();
        result.innerHTML = "Please wait...";

        setTimeout(() => {
            result.innerHTML = "Thank you for your message!";
            form.classList.add("hidden"); // Hide form fields and button after submission
        }, 1000);
    });
    
      // Image Modal
    const imageModal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const modalClose = document.querySelector(".modal-close");

    document.querySelectorAll(".flyer-image").forEach(img => {
        img.addEventListener("click", function () {
            modalImage.src = this.dataset.flyer;
            imageModal.style.display = "flex";
        });
    });

    modalClose.addEventListener("click", () => {
        imageModal.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === imageModal) {
            imageModal.style.display = "none";
        }
    });

    // About Section Expand/Collapse
    const aboutSummary = document.getElementById("about-summary");
    const aboutFull = document.getElementById("about-full");
    const readMoreBtn = document.getElementById("toggleAbout");
    const readLessBtn = document.getElementById("toggleAboutLess");

    if (aboutSummary && aboutFull && readMoreBtn && readLessBtn) {
        readMoreBtn.addEventListener("click", () => {
            aboutSummary.style.display = "none";
            aboutFull.style.display = "block";
        });

        readLessBtn.addEventListener("click", () => {
            aboutSummary.style.display = "block";
            aboutFull.style.display = "none";
        });
    }
});