document.getElementById('accessibilityBtn').addEventListener('click', function() {
    document.getElementById('accessibilityModal').style.display = 'flex';
});

document.querySelector('.close').addEventListener('click', function() {
    document.getElementById('accessibilityModal').style.display = 'none';
});

document.getElementById('applySettings').addEventListener('click', function() {
    let fontSize = document.getElementById('fontSize').value;
    let contrast = document.getElementById('contrast').value;

    document.body.style.fontSize = fontSize === 'normal' ? '16px' : fontSize === 'large' ? '18px' : '20px';

    if (contrast === 'high') {
        document.body.style.background = 'yellow';
        document.body.style.color = 'black';
    } else if (contrast === 'dark') {
        document.body.style.background = '#222';
        document.body.style.color = 'white';
    } else {
        document.body.style.background = '';
        document.body.style.color = '';
    }

    document.getElementById('accessibilityModal').style.display = 'none';
});
