
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
