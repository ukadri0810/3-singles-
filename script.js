(() => {
  const loader = document.getElementById('loader');
  const shouldLoop = new URLSearchParams(window.location.search).has('loop');
  const finish = () => {
    document.body.classList.add('loaded');
    setTimeout(() => loader?.remove(), 900);
  };
  if (!shouldLoop) {
    window.setTimeout(finish, 7600);
  }
})();
