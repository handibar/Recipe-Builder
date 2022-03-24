const sequelize = require('../config/connection');
const { Ingredient, IngredientRecipe, Recipe } = require('../models');

const ingredientData = require('./ingredientData.json');
const recipeData = require('./recipeData.json');
const ingredientRecipeData = require('./ingredientrecipeData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: false });
  const seedIngredients = await Ingredient.bulkCreate(ingredientData);
  const seedRecipes = await Recipe.bulkCreate(recipeData);
  const seedIngredientRecipes = await IngredientRecipe.bulkCreate(
    ingredientRecipeData
  );
  process.exit(0);
};

seedDatabase();
