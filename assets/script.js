// Dark Mode Toggle
const btn = document.getElementById('theme-toggle');
btn.addEventListener('click', () => {
  document.documentElement.classList.toggle('dark');
  btn.textContent = document.documentElement.classList.contains('dark') ? '☀️' : '🌙';
});

// Typewriter Effect
const phrases = ['Web Developer.', 'UI/UX Enthusiast.', 'Open-Source Contributor.'];
let idx = 0, charIndex = 0, current = '', isDeleting = false;
const typeEl = document.getElementById('typewriter');

function type() {
  const full = phrases[idx];
  current = isDeleting
    ? full.substring(0, --charIndex)
    : full.substring(0, ++charIndex);
  typeEl.textContent = current;
  if (!isDeleting && current === full) {
    setTimeout(() => isDeleting = true, 1000);
  } else if (isDeleting && current === '') {
    isDeleting = false;
    idx = (idx + 1) % phrases.length;
  }
  setTimeout(type, isDeleting ? 50 : 100);
}
type();

// Modal Logic
document.querySelectorAll('[data-modal]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.getElementById(btn.dataset.modal)
      .classList.add('modal-open');
  });
});
document.querySelectorAll('.modal-close').forEach(x => {
  x.addEventListener('click', () => {
    x.closest('.modal').classList.remove('modal-open');
  });
});
