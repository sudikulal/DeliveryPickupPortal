const deliveryModel = require("./src/models/delivery.model");
const userModel = require("./src/models/user.model");
const pickupModel = require("./src/models/pickup.model");

process.env.DB_NAME = ''
const sequelize = require("./src/db/connect");

async function createDatabase(databaseName) {
  try {
    const result = await sequelize.showAllSchemas(); // Sequelize method to get all schemas/databases
    const databases = result.map((schema) => schema.SchemaName);


    if (!databases.includes(databaseName))
      await sequelize.queryInterface.createDatabase(databaseName, {
        ifNotExists: true,
      });

    process.env.DB_NAME = databaseName;

    Promise.all([pickupModel.sync(), userModel.sync(), deliveryModel.sync()]);

    console.log(`Database '${databaseName}' created successfully`);
  } catch (error) {
    console.error(`Error creating database '${databaseName}':`, error);
    process.exit(1);
  }
}

async function setupDatabase() {
  try {
    // Create actual database
    await createDatabase(process.env.DB_NAME);

    // Create test database
    await createDatabase(process.env.DB_NAME + "test");
  } catch (error) {
    console.error("Error during database setup:", error);
  }
}

setupDatabase();
