const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  "id20628157_binstorequynh",
  "id20628157_binstoremrquynh",
  "b4*]-gma^4_Dj_|f",

  {
    host: "mysql99.000webhosting.com",
    dialect: "postgres",
    logging: false,
    query: { raw: true },
    timezone: "+07:00",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  }
);

let connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = connectDB;
