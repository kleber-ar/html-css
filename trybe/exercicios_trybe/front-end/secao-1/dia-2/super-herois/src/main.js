import Swal from 'sweetalert2';

const img = document.querySelector('#image');
const name = document.querySelector('#name');
const button = document.querySelector('#button');

button.addEventListener('click', (event) => {
  event.preventDefault();

  fetch(`https://akabab.github.io/superhero-api/api/all.json`)
    .then((result) => result.json())
    .then((data) => {
      const randomIndex = Math.floor(Math.random() * data.length);
      const hero = data[randomIndex];

      img.src = hero.images.md;
      name.innerHTML = hero.name;
    })
    .catch((error) => Swal.fire({
      title: 'Hero not found',
      text: error.message,
      icon: 'error',
      confirmButtonText: 'Cool',
    }));
});
