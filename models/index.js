// import models
const Recipe = require('./Recipe');
const Ingredient = require('./Ingredient');
const IngredientRecipe = require('./IngredientRecipe');
const User = require('./User');

// ingredient belongsTo recipe
Ingredient.belongsTo(Recipe, { 
foreignKey: "recipe_id",

});
// recipe has many ingredients
Recipe.hasMany(Ingredient, {
  foreignKey: "ingredient_id"
})

// Products belongToMany Tags (through ProductTag)

// Tags belongToMany Products (through ProductTag)

module.exports = {
  Recipe,
  Ingredient,
  IngredientRecipe,
  User,
};