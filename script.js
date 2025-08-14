document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('lang-switch');
    var isEnglish = window.location.pathname.toLowerCase().includes('en.html');

    var saved = null;
    try {
        saved = localStorage.getItem('preferredLanguage');
    } catch (e) {
        saved = null;
    }

    if (saved === 'EN' && !isEnglish) {
        window.location.replace('EN.html');
        return;
    }
    if (saved === 'RU' && isEnglish) {
        window.location.replace('./');
        return;
    }

    if (toggle) {
        toggle.addEventListener('click', function () {
            try {
                localStorage.setItem('preferredLanguage', isEnglish ? 'RU' : 'EN');
            } catch (e) {}
        });
    }
});