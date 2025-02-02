// Accessibility Modal functionality
document.getElementById('accessibilityBtn').addEventListener('click', function () {
  document.getElementById('accessibilityModal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function () {
  document.getElementById('accessibilityModal').style.display = 'none';
});

document.getElementById('applySettings').addEventListener('click', function () {
  let fontSize = document.getElementById('fontSize').value;
  let contrast = document.getElementById('contrast').value;

  // Adjust font size
  document.body.style.fontSize = fontSize === 'normal'
    ? '16px'
    : fontSize === 'large'
      ? '18px'
      : '20px';

  // Remove any existing dark mode class
  document.body.classList.remove('dark-mode');

  if (contrast === 'high') {
    document.body.style.background = 'yellow';
    document.body.style.color = 'black';
  } else if (contrast === 'dark') {
    document.body.style.background = '#222';
    document.body.style.color = 'white';
    // Add dark mode class for additional styling (like dark flyers)
    document.body.classList.add('dark-mode');
  } else {
    document.body.style.background = '';
    document.body.style.color = '';
  }

  document.getElementById('accessibilityModal').style.display = 'none';
});

// About Section Toggle functionality
const toggleAboutBtn = document.getElementById('toggleAbout');
const toggleAboutLessBtn = document.getElementById('toggleAboutLess');
const aboutFull = document.getElementById('about-full');

toggleAboutBtn.addEventListener('click', function () {
  aboutFull.style.display = 'block';
  toggleAboutBtn.style.display = 'none';
});

if (toggleAboutLessBtn) {
  toggleAboutLessBtn.addEventListener('click', function () {
    aboutFull.style.display = 'none';
    toggleAboutBtn.style.display = 'inline-block';
  });
});