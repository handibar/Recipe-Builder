const newFavoriteHandler = (event) => {
  console.log('clicked');

  event.preventDefault();
};

document
  .querySelector('.new-recipe-form')
  .addEventListener('submit', newFavoriteHandler);
