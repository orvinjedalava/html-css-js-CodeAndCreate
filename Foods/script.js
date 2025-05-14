const icons = document.querySelectorAll('.section-1-icons i');

setInterval(() => {
  // Remove the 'change' class from the current icon
  const currentIcon = document.querySelector('.section-1-icons .change');
  currentIcon.classList.remove('change');

  // Logic to find the next icon
  // If the current icon is the last one, loop back to the first one
  const nextIcon = currentIcon === icons[icons.length - 1] ? icons[0] : currentIcon.nextElementSibling;
  nextIcon.classList.add('change');
  
}, 4000)