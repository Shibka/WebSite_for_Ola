document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('lang-switch');
    var isEnglish = (document.documentElement.getAttribute('lang') || '').toLowerCase().indexOf('en') === 0;

    var saved = null;
    try {
        saved = localStorage.getItem('preferredLanguage');
    } catch (e) {
        saved = null;
    }

    // Only auto-redirect once per session to avoid loops
    var redirected = false;
    try {
        redirected = sessionStorage.getItem('redirectedOnce') === '1';
    } catch (e) {}

    if (!redirected) {
        if (saved === 'EN' && !isEnglish) {
            try { sessionStorage.setItem('redirectedOnce', '1'); } catch (e) {}
            window.location.replace('EN.html');
            return;
        }
        if (saved === 'RU' && isEnglish) {
            try { sessionStorage.setItem('redirectedOnce', '1'); } catch (e) {}
            window.location.replace('./');
            return;
        }
    }

    if (toggle) {
        toggle.addEventListener('click', function () {
            try {
                localStorage.setItem('preferredLanguage', isEnglish ? 'RU' : 'EN');
            } catch (e) {}
        });
    }

    // Close mobile menu on nav link click
    var nav = document.querySelector('nav');
    if (nav) {
        nav.addEventListener('click', function (e) {
            var target = e.target;
            if (target && target.tagName === 'A') {
                document.body.classList.remove('mobile-nav-open');
            }
        });
    }

    // Close on Escape
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            document.body.classList.remove('mobile-nav-open');
        }
    });
});