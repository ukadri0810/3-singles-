
const stage = document.getElementById('stage');
const timeline = [
  [80, () => stage.classList.add('phase-signal')],
  [550, () => stage.classList.add('light-red')],
  [1000, () => stage.classList.add('light-yellow')],
  [1450, () => stage.classList.add('light-green')],
  [2300, () => stage.classList.add('phase-rotate')],
  [3050, () => stage.classList.add('phase-morph')],
  [3550, () => stage.classList.add('phase-logo')],
  [4050, () => stage.classList.add('phase-copy')],
  [4300, () => stage.classList.add('phase-progress')],
  [6700, () => document.body.classList.add('is-loaded')]
];
window.addEventListener('load', () => {
  timeline.forEach(([delay, action]) => window.setTimeout(action, delay));
});

// Premium homepage interactions: cinematic photo rotation + soft reveal on scroll.
const slides = Array.from(document.querySelectorAll('.hero-slide'));
const slideTitle = document.getElementById('slideTitle');
const slideNames = ['Oreo Coffee', 'Cheesy Garlic Pizza', 'Cheese Pizza', 'Signature Mocktail'];
let currentSlide = 0;
function showSlide(index) {
  slides.forEach((slide, i) => slide.classList.toggle('is-active', i === index));
  if (slideTitle) slideTitle.textContent = slideNames[index] || 'Cafe Favourite';
}
if (slides.length) {
  window.setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4200);
}

const revealItems = document.querySelectorAll('.section-reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.16 });
revealItems.forEach((item) => revealObserver.observe(item));
window.setTimeout(() => {
  document.querySelector('.hero')?.classList.add('is-visible');
}, 6900);
