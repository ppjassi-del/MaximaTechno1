const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn?.addEventListener('click', () => nav.classList.toggle('open'));

document.querySelectorAll('nav a').forEach(a => {
  a.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
    }
  });
}, { threshold: 0.05 });

document.querySelectorAll('.reveal').forEach(el => {
  observer.observe(el);
  const rect = el.getBoundingClientRect();
  if (rect.top < window.innerHeight + 100) {
    el.classList.add('visible');
  }
});