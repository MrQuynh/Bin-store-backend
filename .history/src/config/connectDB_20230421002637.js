const { Sequelize } = require("sequelize");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize(
  "binstore",
  "2obz2id4j9k1x8xq3mat",
  "pscale_pw_BXoo8HNaVjp4Piax1iQ4hE3Tz67dZRoTuiSPSP2VZLC",

  {
    host: "aws.connect.psdb.cloud",
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
