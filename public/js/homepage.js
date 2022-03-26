const newFormHandler = async (event) => {
  let ingredients = [];
  let checkboxes = document.querySelectorAll('input[type=checkbox]:checked');
  event.preventDefault();
  let createButton = document.querySelector('.js-create');
  if (createButton.getAttribute('data-loggedin') === 'false') {
    var x = document.getElementById('snackbar');

    // Add the "show" class to DIV
    x.className = 'show';

    // After 3 seconds, remove the show class from DIV
    setTimeout(function () {
      x.className = x.className.replace('show', '');
    }, 3000);
  } else {
    for (var i = 0; i < checkboxes.length; i++) {
      ingredients.push(checkboxes[i].value);
    }
    const response = await fetch('/api/recipes', {
      method: 'POST',
      body: JSON.stringify({ ingredients }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // this is an array of recipes that we will use javascript to put back onto the page
      const data = await response.json();
      const recipeIDs = data.map((recipe) => recipe.recipe_id);

      // calls the homeroute for recipes
      window.location.replace(`recipes?ids=${recipeIDs}`);
      // submit hidden form with the id's that have been selected
      // when they hit create it will submit another form that goes to the recipe page with the ID's in it
    } else {
      alert(response.statusText);
    }
  }
};

document
  .querySelector('.new-project-form')
  .addEventListener('submit', newFormHandler);
