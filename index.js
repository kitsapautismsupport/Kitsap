document.addEventListener("DOMContentLoaded", function () {
    // Accessibility Modal
    const accessibilityModal = document.getElementById("accessibilityModal");
    const accessibilityBtn = document.getElementById("accessibilityBtn");
    const accessibilityClose = document.querySelector(".accessibility-close");

    if (accessibilityModal && accessibilityBtn && accessibilityClose) {
        accessibilityBtn.addEventListener("click", () => {
            accessibilityModal.style.display = "flex";
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

    // Flyer Modals
    const flyerImages = document.querySelectorAll('.flyer-img');
    flyerImages.forEach(image => {
        image.addEventListener('click', () => {
            const modalId = image.getAttribute('data-modal-target');
            const modal = document.getElementById(modalId);
            modal.style.display = "flex";

            const close = modal.querySelector('.close');
            close.addEventListener("click", () => {
                modal.style.display = "none";
            });

            window.addEventListener("click", (event) => {
                if (event.target === modal) {
                    modal.style.display = "none";
                }
            });
        });
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

    // Contact Modal
    const contactModal = document.getElementById("contactModal");
    const contactBtn = document.getElementById("contactBtn");
    const contactClose = document.querySelector(".contact-close");

    if (contactModal && contactBtn && contactClose) {
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
    }

    // Contact Form Submission
    const form = document.getElementById("contactForm");
    const result = document.getElementById("result");

    if (form && result) {
        form.addEventListener("submit", async function (e) {
            e.preventDefault();
            result.innerHTML = "Please wait...";

            setTimeout(() => {
                result.innerHTML = "Thank you for your message!";
                form.reset();

                // Hide form fields and submit button after successful submission
                form.querySelectorAll("input, textarea, button").forEach(field => {
                    field.style.display = "none";
                });
            }, 1000);
        });
    }
});