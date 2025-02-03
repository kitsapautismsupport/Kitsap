document.addEventListener("DOMContentLoaded", function () {
    function setupModal(buttonId, modalId) {
        const modal = document.getElementById(modalId);
        const button = document.getElementById(buttonId);
        const close = modal.querySelector(".close");

        button.addEventListener("click", () => {
            modal.style.display = "flex";
        });

        close.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });
    }

    setupModal("accessibilityBtn", "accessibilityModal");
    setupModal("contactBtn", "contactModal");

    document.querySelectorAll(".flyer-img").forEach(img => {
        img.addEventListener("click", () => {
            const modalId = img.getAttribute("data-modal");
            const modal = document.getElementById(modalId);
            modal.style.display = "flex";
        });
    });

    document.querySelectorAll(".modal .close").forEach(closeBtn => {
        closeBtn.addEventListener("click", () => {
            closeBtn.closest(".modal").style.display = "none";
        });
    });

    document.getElementById("contactForm").addEventListener("submit", function(event) {
        event.preventDefault();
        document.getElementById("result").textContent = "Message sent!";
    });
});