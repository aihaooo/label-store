const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
    });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

window.addEventListener('scroll', () => {
    const h = document.documentElement;
    const scrolled = (h.scrollTop) / (h.scrollHeight - h.clientHeight) * 100;
    document.getElementById('progress').style.width = scrolled + '%';
});

const toTop = document.getElementById('toTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        toTop.classList.add('visible');
    } else {
        toTop.classList.remove('visible');
    }
});

toTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});