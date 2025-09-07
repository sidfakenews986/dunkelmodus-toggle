document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Toggle Dark Mode';
    document.body.appendChild(toggleButton);

    let currentMode = localStorage.getItem('mode') || 'light';
    document.body.classList.toggle('dark', currentMode === 'dark');

    toggleButton.addEventListener('click', function () {
        currentMode = currentMode === 'dark' ? 'light' : 'dark';
        document.body.classList.toggle('dark', currentMode === 'dark');
        localStorage.setItem('mode', currentMode);
    });
});

// CSS für den Dunkelmodus
const style = document.createElement('style');
style.innerHTML = `
    body.dark {
        background-color: #121212;
        color: #ffffff;
    }
    `;
document.head.appendChild(style);