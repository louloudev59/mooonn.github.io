const container = document.querySelector('.feu-d-artifice');

container.addEventListener('mousemove', (e) => {
  const firework = document.createElement('div');
  firework.classList.add('firework');
  firework.style.top = `${e.pageY}px`;
  firework.style.left = `${e.pageX}px`;
  container.appendChild(firework);

  setTimeout(() => {
    firework.remove();
  }, 1000);
});
