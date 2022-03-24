const { Ingredient } = require('../models');

const ingredientData = [
  {
    name: 'Shrimp',
    type_id: 1,
  },
  {
    name: 'Salmon',
    type_id: 1,
  },
  {
    name: 'Ground Beef',
    type_id: 1,
  },
  {
    name: 'Chicken',
    type_id: 1,
  },
  {
    name: 'Egg',
    type_id: 1,
  },
  {
    name: 'Butter',
    type_id: 4,
  },
  {
    name: 'Pepperoni',
    type_id: 1,
  },
  {
    name: 'Bacon',
    type_id: 1,
  },
  {
    name: 'Turkey',
    type_id: 1,
  },
  {
    name: 'Sausage',
    type_id: 1,
  },
  {
    name: 'Rice',
    type_id: 2,
  },
  {
    name: 'Pasta',
    type_id: 2,
  },
  {
    name: 'Bread',
    type_id: 2,
  },
  {
    name: 'Tortillas',
    type_id: 2,
  },
  {
    name: 'Ravioli',
    type_id: 2,
  },
  {
    name: 'Soba Noodles',
    type_id: 2,
  },
  {
    name: 'Pizza Dough',
    type_id: 2,
  },
  {
    name: 'Chipotle Peppers',
    type_id: 3,
  },
  {
    name: 'Scallions',
    type_id: 3,
  },
  {
    name: 'Carrots',
    type_id: 3,
  },
  {
    name: 'Bean Sprouts',
    type_id: 3,
  },
  {
    name: 'Onion',
    type_id: 3,
  },
  {
    name: 'Potatoes',
    type_id: 3,
  },
  {
    name: 'Kale',
    type_id: 3,
  },
  {
    name: 'Tomatos',
    type_id: 3,
  },
  {
    name: 'Cucumber',
    type_id: 3,
  },
  {
    name: 'Chicken Broth',
    type_id: 5,
  },
  {
    name: 'Lemon',
    type_id: 3,
  },
  {
    name: 'Lime',
    type_id: 3,
  },
  {
    name: 'White Wine',
    type_id: 5,
  },
  {
    name: 'Mustard',
    type_id: 5,
  },
  {
    name: 'Almonds',
    type_id: 1,
  },
  {
    name: 'Walnuts',
    type_id: 1,
  },
  {
    name: 'Brown Sugar',
    type_id: 5,
  },
  {
    name: 'Miso Paste',
    type_id: 5,
  },
  {
    name: 'Kidney Beans',
    type_id: 1,
  },
  {
    name: 'Stout Beer',
    type_id: 5,
  },

  {
    name: 'Heavy Cream',
    type_id: 4,
  },
  {
    name: 'Parmesean Cheese',
    type_id: 4,
  },
  {
    name: 'Cheddar Cheese',
    type_id: 4,
  },
  {
    name: 'Cream Cheese',
    type_id: 4,
  },
  {
    name: 'Blue Cheese',
    type_id: 4,
  },
  {
    name: 'Mozerella Cheese',
    type_id: 4,
  },
  {
    name: 'Mushrooms',
    type_id: 3,
  },
  {
    name: 'Bread Crumbs',
    type_id: 2,
  },
  {
    name: 'Ranch Mix',
    type_id: 5,
  },
  {
    name: 'Sour Cream',
    type_id: 4,
  },
  {
    name: 'Bell Pepper',
    type_id: 3,
  },
  {
    name: 'Black Olives',
    type_id: 3,
  },
  {
    name: 'Mustard',
    type_id: 5,
  },
];

const seedIngredients = () => Ingredient.bulkCreate(ingredientData);

seedIngredients();

module.exports = seedIngredients;
