


function switchLanguage() {
    const langSwitchElement = document.getElementById('lang-switch');
    const currentLang = langSwitchElement.textContent;

    if (currentLang === 'EN') {
        // Change to English version
        window.location.href = 'EN.html';  // Assuming file naming
        langSwitchElement.textContent = 'RU';
        localStorage.setItem('preferredLanguage', 'EN');  // Store preference
    } else {
        // Change to Russian version
        window.location.href = './';
        langSwitchElement.textContent = 'EN';
        localStorage.setItem('preferredLanguage', 'RU');  // Store preference
    }
}