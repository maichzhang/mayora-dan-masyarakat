const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#navigation');
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  nav.classList.toggle('open', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && nav.classList.contains('open')) {
    nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); toggle.focus();
  }
});
const dialog = document.querySelector('#lightbox');
document.querySelectorAll('[data-image]').forEach(button => button.addEventListener('click', () => {
  dialog.querySelector('img').src = button.dataset.image;
  dialog.querySelector('img').alt = button.dataset.caption;
  dialog.querySelector('p').textContent = button.dataset.caption;
  dialog.showModal();
}));
dialog.querySelector('button').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => { if (event.target === dialog) { const r = dialog.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) dialog.close(); } });
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => {
    if (entry.isIntersecting) nav.querySelectorAll('a').forEach(a => a.classList.toggle('active', a.hash === '#' + entry.target.id));
  }), { rootMargin: '-20% 0px -55% 0px', threshold: 0 });
  document.querySelectorAll('section[id]').forEach(section => observer.observe(section));
}
