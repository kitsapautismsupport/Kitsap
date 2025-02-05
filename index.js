document.addEventListener("DOMContentLoaded", function () {
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

    // ✅ Fix: Properly Submit to Web3Forms
    contactForm.addEventListener("submit", async function (e) {
        e.preventDefault(); // Prevent default form action

        resultMessage.textContent = "Sending...";

        const formData = new FormData(contactForm);
       
    // ✅ Append CC Email for forwarding
        formData.append("cc", "phillipjohngalbraith@yahoo.com");
        
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData,
            });

            if (response.ok) {
                resultMessage.textContent = "Thank you for your message!";
                setTimeout(() => {
                    contactModal.style.display = "none"; // Hide modal after success
                    contactForm.reset(); // Reset form for next use
                }, 2000);
            } else {
                resultMessage.textContent = "Error submitting form. Please try again.";
            }
        } catch (error) {
            resultMessage.textContent = "Network error. Please check your connection.";
        }
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