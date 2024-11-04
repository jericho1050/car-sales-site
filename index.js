// javascript

const $kebabMenu = document.querySelector('.kebab-menu');
const $filter = document.querySelector('.filter');
const $save = document.querySelectorAll('.action');
$kebabMenu.onclick = (e) => {
  $filter.classList.toggle('show');
};

document.body.addEventListener('click', (e) => {
  if (e.target !== $kebabMenu && !$filter.contains(e.target)) {
    $filter.classList.remove('show');
  }
});

$save.forEach((element) => {
  element.addEventListener('click', async (event) => {
    const target = event.target;
    if (target.closest('.action')) {
      if (target.classList.contains('saved')) {
        target.classList.remove('saved');
        target.src = 'save.svg';
      } else {
        target.classList.add('saved');
        target.src = 'save-filled.svg';

        // Create a promise to handle the animation timing
        await new Promise((resolve) => {
          target.style.animationName = 'saved';
          target.style.animationDuration = '0.5s';
          target.style.animationTimingFunction = 'ease-in-out';
          target.addEventListener('animationend', resolve, { once: true });
        });

        // Animation has ended
        target.style.animationName = '';
      }
    }
  });
});

// animation-name: saved;
// animation-duration: 1s;
// animation-timing-function: ease-in-out;
