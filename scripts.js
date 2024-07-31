// Crear corazones animados
const heartContainer = document.getElementById('heart-container');
const numberOfHearts = 20;

for (let i = 0; i < numberOfHearts; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.textContent = '❤️';
    heart.style.left = `${Math.random() * 100}%`;
    heart.style.top = `${Math.random() * 100}%`;
    heart.style.fontSize = `${Math.random() * 2 + 1}em`;
    heart.style.animationDuration = `${Math.random() * 3 + 2}s`;
    heartContainer.appendChild(heart);
}

// Mostrar mensaje especial
function showMessage() {
    document.getElementById('special-message').classList.remove('hidden');
}
