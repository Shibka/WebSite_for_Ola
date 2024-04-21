let a = "WE ARE CONSTANTLY IMPROVING AND LOOKING FOR NEW OPPORTUNITIES FOR GROWTH AND DEVELOPMENT!"
let b = a.toUpperCase()
console.log(b)



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
        window.location.href = './index.html';
        langSwitchElement.textContent = 'EN';
        localStorage.setItem('preferredLanguage', 'RU');  // Store preference
    }
}