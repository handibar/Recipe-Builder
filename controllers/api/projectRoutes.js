const router = require('express').Router();
const { Project } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newProject = await Project.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const projectData = await Project.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!projectData) {
      res.status(404).json({ message: 'No project found with this id!' });
      return;
    }

    res.status(200).json(projectData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;

// try {
//   // Get all projects and JOIN with user data
//   const recipeData = await Recipe.findAll({
//     include: [
//       {
//         model: Ingredient,
//         through: IngredientRecipe,
//       },
//     ],
//   });

//   // Serialize data so the template can read it
//   const recipes = recipeData.map((recipe) => recipe.get({ plain: true }));
//   // console.log(recipes);
//   // Pass serialized data and session flag into template
//   res.render('homepage', {
//     recipes,
//     logged_in: req.session.logged_in,
//   });
// } catch (err) {
//   res.status(500).json(err);
// }
