const { Recipe } = require('../models');

const recipeData = [
  {
    name: 'Shrimp Scampi',
    description:
      'Quick and tasty shrimp and pasta, finished with lemon and red pepper flakes.',
    image_url: '/images/shrimpscampi.jpg',
  },
  {
    name: 'Buffalo Chicken Enchiladas',
    description:
      'Stuff corn tortillas with a cheesy Buffalo filling and bake until melted for an easy weeknight meal',
    image_url: '/images/buffalochicken.jpg',
  },
  {
    name: 'Glazed Salmon and Spiced Carrots',
    description:
      'Honey-mustard glazed salmon and serve it with carrots tossed in a spiced lime and almond dressing.',
    image_url: '/images/salmonandcarrots.jpg',
  },
  {
    name: 'Ravioli with Sage and Walnut Butter',
    description:
      'Store bought ravioli gets an upgrade with this buttery sage and walnut butter.',
    image_url: '/images/ravioli.jpg',
  },
  {
    name: 'Turkey Pad Thai',
    description:
      'Loaded with fresh veggies, this take on pad thai is hearty and healthy.',
    image_url: '/images/padthai.jpg',
  },
  {
    name: 'Garlic Butter Baked Salmon',
    description:
      'Quick and easy, this garlic butter glazed baked salmon is a tasty, weeknight meal.',
    image_url: '/images/garlicsalmon.jpg',
  },
  {
    name: 'Chipotle Chicken Skewers',
    description: 'The grilled chicken skewers pack a bit of spice.',
    image_url: '/images/skewers.jpg',
  },
  {
    name: 'Hamburger',
    description: 'An American classic with an upgrade.',
    image_url: '/images/hamburger.jpg',
  },
  {
    name: 'Potato Wedges',
    description:
      'A one pan meal. Perfectly seasoned and baked until crispy, easy and tasty.',
    image_url: '/images/potatowedges.jpg',
  },
  {
    name: 'Zuppa Toscana',
    description:
      'Creamy and full of flavor, this is the perfect recipe for this classic Italian soup.',
    image_url: '/images/zuppatoscana.jpg',
  },
  {
    name: 'Pasta Salad',
    description:
      'Fresh and easy pasta salad packed with crisp vegetables, fresh mozzarella, and tossed with a simple homemade dressing.',
    image_url: '/images/pastasalad.jpg',
  },
  {
    name: 'Cool Summer Soba Noodle Salad',
    description:
      'A refreshing summer salad with veggies and an Asian inspired dressing.',
    image_url: '/images/sobanoodles.jpg',
  },
  {
    name: 'Parmesan Bread Twist',
    description:
      'Made with store bought dough, this quick recipe will ease your craving for Italian takeout.',
    image_url: '/images/twists.jpg',
  },
  {
    name: 'Chipotle Stout Chili',
    description:
      'Filled with slow cooked meat and veggies, this chili is an unbeatable weeknight meal.',
    image_url: '/images/chili.jpg',
  },
  {
    name: 'Chicken Marsala',
    description: 'Creamy, slow simmered chicken in a rich sauce.',
    image_url: '/images/chickenmarsala.jpg',
  },
  {
    name: 'Chili Glazed Salmon',
    description: 'Baked salmon with a sweet and spicy glaze.',
    image_url: '/images/chiliglazedsalmon.jpg',
  },
  {
    name: 'Baked Ranch Chicken',
    description:
      'Baked chicken coated in ranch seasoning and bread crumbs for a flavorful, crispy dinner.',
    image_url: 'ranchchicken.jpg',
  },
  {
    name: 'Baked Shrimp',
    description:
      'A perfect, one pan meal. These shrimp are perfectly seasoned and ready in just a few minutes.',
    image_url: '/images/bakedshrimp.jpg',
  },
  {
    name: 'Cheeseburger Stuffed Bell Pepper',
    description: 'A healthy, veggie forward take on a classic weeknight meal.',
    image_url: '/images/cheeseburgerpeppers.jpg',
  },
  {
    name: 'Baked Mac & Cheese',
    description:
      'A grown up version of a childhood classic, this cheesy pasta is finished in the oven for a crispy upgrade.',
    image_url: '/images/macandcheese.jpg',
  },
];

const seedRecipes = () => Recipe.bulkCreate(recipeData);
seedRecipes();
module.exports = seedRecipes;
