// import models
const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');
const IngredientRecipe = require('./IngredientRecipe');
const Favorite = require('./Favorite.js');
const User = require('./User');

// ingredient belongsTo recipe
Ingredient.belongsToMany(Recipe, {
  through: IngredientRecipe,
  foreignKey: 'ingredient_id',
});
// recipe has many ingredients
Recipe.belongsToMany(Ingredient, {
  through: IngredientRecipe,
  foreignKey: 'recipe_id',
});

// Many Favorite Recipes belong to User
Recipe.belongsToMany(User, {
  through: Favorite,
  foreignKey: 'recipe_id',
});
// User has many Favorite Recipes
User.belongsToMany(Recipe, {
  through: Favorite,
  foreignKey: 'user_id',
});

module.exports = {
  Recipe,
  Ingredient,
  IngredientRecipe,
  Favorite,
  User,
};
