let a = "WE ARE CONSTANTLY IMPROVING AND LOOKING FOR NEW OPPORTUNITIES FOR GROWTH AND DEVELOPMENT!"
let b = a.toUpperCase()
console.log(b)



function switchLanguage() {
    const langSwitchElement = document.getElementById('lang-switch');
    const searchField = document.getElementById('searchField');
    const currentLang = langSwitchElement.textContent;

    if (currentLang === 'EN') {
        // Change to English version
        window.location.href = 'EN.html';
        langSwitchElement.textContent = 'RU';
        localStorage.setItem('preferredLanguage', 'EN');
        localStorage.setItem('searchFieldValue', searchField.value);  // Save current search value
    } else {
        // Change to Russian version
        window.location.href = 'RU.html';
        langSwitchElement.textContent = 'EN';
        localStorage.setItem('preferredLanguage', 'RU');
        localStorage.setItem('searchFieldValue', searchField.value);  // Save current search value
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const searchField = document.getElementById('searchField');
    // Check if there is a stored value for the search field
    const savedSearchValue = localStorage.getItem('searchFieldValue');
    if (savedSearchValue) {
        searchField.value = savedSearchValue;
    }
});