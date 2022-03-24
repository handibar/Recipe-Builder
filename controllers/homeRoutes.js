const router = require('express').Router();
const {
  Ingredient,
  Recipe,
  IngredientRecipe,
  User,
  Favorite,
} = require('../models');
const withAuth = require('../utils/auth');

// show all ingredients on the homepage

router.get('/', async (req, res) => {
  try {
    const ingredientData = await Ingredient.findAll({});

    const ingredient = ingredientData.map((ingredient) =>
      ingredient.get({ plain: true })
    );
    // console.log(ingredient);
    res.render('homepage', {
      ingredient,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// display recipes after user clicks checkboxes

router.get('/recipes', withAuth, async (req, res) => {
  const ids = req.query.ids.split(',');
  // console.log('here are the ids' + ids);
  let whereClause = {};
  if (ids.length) {
    whereClause = { id: ids };
    // console.log('HELLO AGAIN' + whereClause.id);
  }
  try {
    // Get all recipes
    const recipeData = await Recipe.findAll({
      where: whereClause,
      include: [
        {
          model: Ingredient,
          through: IngredientRecipe,
        },
      ],
    });

    // Serialize data so the template can read it
    const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
    // console.log('this is it' + recipes);
    // Pass serialized data and session flag into template
    res.render('recipes', {
      recipes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      include: { model: Recipe, through: Favorite },
    });

    const user = userData.get({ plain: true });

    res.render('profile', {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});

module.exports = router;
