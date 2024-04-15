let a = "WE ARE CONSTANTLY IMPROVING AND LOOKING FOR NEW OPPORTUNITIES FOR GROWTH AND DEVELOPMENT!"
let b = a.toUpperCase()
console.log(b)



function switchLanguage() {
    const currentLang = document.getElementById('lang-switch').textContent;
    if (currentLang === 'EN') {
        // Logic to switch to English
        window.location.href = './indexEN.html'; // Adjust URL if using subdirectories
        document.getElementById('lang-switch').textContent = 'RU';
    } else {
        // Logic to switch to Russian
        window.location.href = './index.html'; // Adjust URL for default language
        document.getElementById('lang-switch').textContent = 'EN';
    }
}