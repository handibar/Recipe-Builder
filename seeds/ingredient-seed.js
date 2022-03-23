const { Ingredient } = require('../models');

const ingredientData = [
  {
    name: 'Shrimp',
  },
  {
    name: 'Salmon',
  },
  {
    name: 'Ground Beef',
  },
  {
    name: 'Chicken',
  },
  {
    name: 'Egg',
  },
  {
    name: 'Salmon',
  },
  {
    name: 'Pepperoni',
  },
  {
    name: 'Bacon',
  },
  {
    name: 'Turkey',
  },
  {
    name: 'Sausage',
  },
  {
    name: 'Rice',
  },
  {
    name: 'Pasta',
  },
  {
    name: 'Bread',
  },
  {
    name: 'Tortillas',
  },
  {
    name: 'Ravioli',
  },
  {
    name: 'Soba Noodles',
  },
  {
    name: 'Pizza Dough',
  },
  {
    name: 'Chipolte Peppers',
  },
  {
    name: 'Scallions',
  },
  {
    name: 'Carrots',
  },
  {
    name: 'Bean Sprouts',
  },
  {
    name: 'Onion',
  },
  {
    name: 'Potatoes',
  },
  {
    name: 'Kale',
  },
  {
    name: 'Tomatos',
  },
  {
    name: 'Cucumber',
  },
  {
    name: 'Chicken Broth',
  },
  {
    name: 'Lemon',
  },
  {
    name: 'Lime',
  },
  {
    name: 'White Wine',
  },
  {
    name: 'Mustard',
  },
  {
    name: 'Almonds',
  },
  {
    name: 'Walnuts',
  },
  {
    name: 'Brown Sugar',
  },
  {
    name: 'Miso Paste',
  },
  {
    name: 'Kidney Beans',
  },
  {
    name: 'Stout Beer',
  },

  {
    name: 'Heavy Cream',
  },
  {
    name: 'Parmesean Cheese',
  },
  {
    name: 'Cheddar Cheese',
  },
  {
    name: 'Cream Cheese',
  },
  {
    name: 'Blue Cheese',
  },
  {
    name: 'Mozerella Cheese',
  },
  {
    name: 'Mushrooms',
  },
  {
    name: 'Bread Crumbs',
  },
  {
    name: 'Ranch Mix',
  },
  {
    name: 'Sour Cream',
  },
  {
    name: 'Bell Pepper',
  },
  {
    name: 'Black Olives',
  },
  {
    name: 'Mustard',
  },
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

seedIngredients();

module.exports = seedIngredients;
