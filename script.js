const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    document.getElementById('progress').style.width = scrolled + '%';

    toTop.classList.toggle('visible', window.scrollY > 400);
});

toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

const burger = document.getElementById('burger');
const navMenu = document.getElementById('nav-menu');

function closeMenu() {
    burger.classList.remove('open');
    navMenu.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
}

burger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', String(isOpen));
});

navMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navMenu.contains(e.target) && !burger.contains(e.target)) {
        closeMenu();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navMenu.classList.contains('open')) {
        closeMenu();
    }
});

const themeToggle = document.getElementById('themeToggle');
const rootEl = document.documentElement;

function updateThemeIcon() {
    themeToggle.textContent = rootEl.dataset.theme === 'light' ? '🌙' : '☀️';
}

updateThemeIcon();

themeToggle.addEventListener('click', () => {
    rootEl.dataset.theme = rootEl.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('theme', rootEl.dataset.theme);
    updateThemeIcon();
});

