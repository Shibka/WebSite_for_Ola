document.addEventListener('DOMContentLoaded', function () {
	var isEnglish = (document.documentElement.getAttribute('lang') || '').toLowerCase().indexOf('en') === 0;

	var saved = null;
	try {
		saved = localStorage.getItem('preferredLanguage');
	} catch (e) {
		saved = null;
	}

	// Redirect at most once per session to avoid loops
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

	// Persist preference when user clicks the language toggle
	var toggle = document.getElementById('lang-switch');
	if (toggle) {
		toggle.addEventListener('click', function () {
			try {
				localStorage.setItem('preferredLanguage', isEnglish ? 'RU' : 'EN');
			} catch (e) {}
		});
	}
});