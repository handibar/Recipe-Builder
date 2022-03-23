const sequelize = require('../config/connection');


const seedDatabase = async () => {
  await sequelize.sync({ force: false });


  process.exit(0);
};

seedDatabase();
