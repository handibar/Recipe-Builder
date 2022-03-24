const router = require('express').Router();
const { parse } = require('dotenv');
// const { json } = require('express/lib/response');
const {
  Recipe,
  Ingredient,
  IngredientRecipe,
  Favorite,
} = require('../../models');
// const { findAll } = require('../../models/Recipe');
const withAuth = require('../../utils/auth');

router.get('/recipe', withAuth, async (req, res) => {
  res.render();
});

// post route for selected ingredients
router.post('/', withAuth, async (req, res) => {
  const ingredients = req.body.ingredients.map(Number);

  try {
    const ingredientData = await IngredientRecipe.findAll({
      where: { ingredient_id: ingredients },
    });

    if (!ingredientData) {
      res.status(404).json({ message: 'no recipes' });
    }
    res.status(200).json(ingredientData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});
// post route for favorite recipes
router.post('/favorites', async (req, res) => {
  try {
    const newFavorite = await Favorite.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newFavorite);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const favoriteData = await Favorite.destroy({
      where: {
        recipe_id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!favoriteData) {
      res.status(404).json({ message: 'No recipe found.' });
      return;
    }

    res.status(200).json(favoriteData);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
