// Startscreen Steuerung
const startScreen = document.getElementById('start-screen');
const backgroundVideo = document.getElementById('background-video');
const backgroundAudio = document.getElementById('background-audio');
const content = document.querySelector('.content');

startScreen.addEventListener('click', () => {
    startScreen.style.opacity = '0';
    setTimeout(() => {
        startScreen.style.display = 'none';
        backgroundVideo.play();
        backgroundAudio.volume = 0.1; // Lautstärke setzen (z.B. 10%)
        backgroundAudio.play();
        content.style.display = 'flex';
        startTyping(); // Tippen erst starten, wenn Seite sichtbar ist
    }, 500); // 0.5 Sekunden Fade
});

// Tipp-Animation
const text = "dalicostello";
const typingElement = document.getElementById("typing");
let index = 0;
let typingInterval;
let resetInterval;

function typeText() {
    typingElement.textContent = text.substring(0, index);

    if (index < text.length) {
        index++;
    } else {
        clearInterval(typingInterval);
        setTimeout(() => {
            typingElement.textContent = "";
            index = 0;
            startTyping();
        }, 2000); // 2 Sekunden Pause nach vollständigem Tippen
    }
}

function startTyping() {
    typingInterval = setInterval(typeText, 150);
}


// Custom Cursor
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.top = e.clientY + 'px';
    cursor.style.left = e.clientX + 'px';
});


// Funkelnde Konfetti-Spuren (verbessert)
document.addEventListener('mousemove', function(e) {
    createSparkle(e.pageX, e.pageY, false);
});

document.addEventListener('click', function(e) {
    createSparkle(e.pageX, e.pageY, true);
});

function createSparkle(x, y, isClick) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = x + 'px';
    sparkle.style.top = y + 'px';
    
    // Random Size
    const size = isClick ? Math.random() * 10 + 10 : Math.random() * 4 + 4;
    sparkle.style.width = size + 'px';
    sparkle.style.height = size + 'px';

    // Random Movement
    const moveX = (Math.random() - 0.5) * 40;
    const moveY = (Math.random() - 0.5) * 40;

    sparkle.style.setProperty('--move-x', moveX + 'px');
    sparkle.style.setProperty('--move-y', moveY + 'px');

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800); // lebt jetzt 0.8 Sekunden
}

// Parallax Effekt
const layer = document.getElementById('layer');

document.addEventListener('mousemove', (e) => {
    const moveX = (e.clientX - window.innerWidth / 2) * 0.02;
    const moveY = (e.clientY - window.innerHeight / 2) * 0.02;

    layer.style.transform = `translate(${moveX}px, ${moveY}px)`;
});
