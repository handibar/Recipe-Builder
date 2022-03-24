//create function if favorite button is clicked

const newFavoriteHandler = async (event) => {
  event.preventDefault();
  console.log('clicked');

  // get recipeid from button when clicked

  const fav = event.target.value;
  console.log(fav);
};

document
  // .querySelector('.new-recipe-form')
  .querySelectorAll('.favbtn')
  .forEach((link) => link.addEventListener('click', newFavoriteHandler));
