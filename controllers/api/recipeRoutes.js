const router = require('express').Router();
const { parse } = require('dotenv');
const { json } = require('express/lib/response');
const { Recipe, Ingredient, IngredientRecipe } = require('../../models');
const { findAll } = require('../../models/Recipe');
const Op = require('sequelize').Op;
// const withAuth = require('../../utils/auth');

router.get('/recipe', async (req, res) => {
  res.render();
});

// post route for selected ingredients
router.post('/', async (req, res) => {
  const ingredients = req.body.ingredients.map(Number);

  try {
    const ingredientData = await IngredientRecipe.findAll({
      // added OR function, which is giving us all recipes with any ingredients.  WE SHOULD BE ABLE TO DO AN AND FUNCTION SOMEHOW TO MAKE IT REQUIRE ALL INGREDIENTS
      where: { ingredient_id: { [Op.or]: ingredients } },
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

module.exports = router;
