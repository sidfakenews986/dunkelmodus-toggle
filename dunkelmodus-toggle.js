document.addEventListener('DOMContentLoaded', function () {
    const toggleButton = document.createElement('button');
    toggleButton.innerText = 'Dunkelmodus umschalten';
    document.body.appendChild(toggleButton);

    const currentMode = localStorage.getItem('mode') || 'light';
    document.body.classList.toggle('dark', currentMode === 'dark');

    toggleButton.addEventListener('click', function () {
        const newMode = currentMode === 'dark' ? 'light' : 'dark';
        document.body.classList.toggle('dark', newMode === 'dark');
        localStorage.setItem('mode', newMode);
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