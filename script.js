const icons = document.querySelectorAll('.icon');

icons.forEach((icon) => {
  icon.addEventListener('mouseenter', () => {
    icon.style.color = 'rgb(224, 36, 103)';
    icon.style.backgroundColor = 'white';
  });

  icon.addEventListener('mouseleave', () => {
    icon.style.color = 'white';
    icon.style.backgroundColor = 'rgb(224, 36, 103)';
  });
});
