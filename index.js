document.addEventListener("DOMContentLoaded", function () {
    // Accessibility Modal
    const modal = document.getElementById("accessibilityModal");
    const openModalBtn = document.getElementById("accessibilityBtn");
    const closeModalBtn = document.querySelector(".close");
    const applySettingsBtn = document.getElementById("applySettings");
    const fontSizeSelect = document.getElementById("fontSize");
    const contrastSelect = document.getElementById("contrast");

    if (modal && openModalBtn && closeModalBtn) {
        openModalBtn.addEventListener("click", () => {
            modal.style.display = "block";
        });

        closeModalBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        window.addEventListener("click", (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        });

        applySettingsBtn.addEventListener("click", () => {
            // Apply Font Size
            document.body.style.fontSize = fontSizeSelect.value === "normal" ? "" : fontSizeSelect.value;

            // Apply Contrast
            document.body.classList.remove("high-contrast", "dark-mode");
            if (contrastSelect.value === "high") {
                document.body.classList.add("high-contrast");
            } else if (contrastSelect.value === "dark") {
                document.body.classList.add("dark-mode");
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
    
//contact form
  const form = document.getElementById('contactForm');
  const result = document.getElementById('result');

  form.addEventListener('submit', async function (e) {
    e.preventDefault();
    result.innerHTML = 'Please wait...';

    const formData = new FormData(form);
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: json,
      });

      const data = await response.json();

      if (data.success) {
        result.innerHTML = 'Thank you for your message!';
        form.reset();
      } else {
        result.innerHTML = 'Oops! Something went wrong.';
      }
    } catch (error) {
      result.innerHTML = 'There was a problem submitting the form.';
    }

});
});