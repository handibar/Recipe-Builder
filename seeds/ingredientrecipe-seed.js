const { IngredientRecipe } = require('../models');

const ingredientRecipeData = [
  {
    ingredient_id: [1, 12, 30],
    recipe_id: 1,
  },
  {
    ingredient_id: [4, 41, 40, 14, 19, 29, 42],
    recipe_id: 2,
  },
  {
    ingredient_id: [2, 20, 31, 32],
    recipe_id: 3,
  },
  {
    ingredient_id: [15, 39, 33],
    recipe_id: 4,
  },
  {
    ingredient_id: [9, 21, 19, 5, 20, 22, 29, 34],
    recipe_id: 5,
  },
  {
    ingredient_id: 1,
    recipe_id: 6,
  },
  {
    ingredient_id: 1,
    recipe_id: 7,
  },
  {
    ingredient_id: 1,
    recipe_id: 8,
  },
  {
    ingredient_id: 1,
    recipe_id: 9,
  },
  {
    ingredient_id: 1,
    recipe_id: 10,
  },
  {
    ingredient_id: 1,
    recipe_id: 11,
  },
  {
    ingredient_id: 1,
    recipe_id: 12,
  },
  {
    ingredient_id: 1,
    recipe_id: 13,
  },
  {
    ingredient_id: 1,
    recipe_id: 14,
  },
  {
    ingredient_id: 1,
    recipe_id: 15,
  },
  {
    ingredient_id: 1,
    recipe_id: 16,
  },
  {
    ingredient_id: 1,
    recipe_id: 17,
  },
  {
    ingredient_id: 1,
    recipe_id: 18,
  },
  {
    ingredient_id: 1,
    recipe_id: 19,
  },
  {
    ingredient_id: 1,
    recipe_id: 20,
  },
];

const seedIngredientRecipes = () =>
  IngredientRecipe.bulkCreate(ingredientRecipeData);

module.exports = seedIngredientRecipes;
