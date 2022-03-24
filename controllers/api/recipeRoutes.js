const router = require('express').Router();
const { parse } = require('dotenv');
// const { json } = require('express/lib/response');
const { Recipe, Ingredient, IngredientRecipe } = require('../../models');
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

router.post('/favorites', withAuth, async (req, res) => {
  try {
    const userFavorite = await User.update({
      ...req.body,
    });

    res.status(200).json(userFavorite);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.post('/recipes', withAuth, async (req, res) => {
//  if (checked === true) {

//    try {
//     const favorites = await getElementById('favorite').value;
//      db.query('Update User Set favorite = ? where id =?' )
//      {
//        where: {
//          recipe_id:
//        }
//      }

// }catch (err) {
//     console.log(err);
//     res.status(500).json(err);
//   };
module.exports = router;
