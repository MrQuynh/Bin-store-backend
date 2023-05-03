import db from "../models/index";

const getAllcodes = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!req.code) {
        resolve({ errCode: -1, message: "Missing parameter" });
      } else {
        const data = await db.Allcodes.findAll({
          where: { type: req.code.toUpperCase() },
        });

        resolve({ errCode: 0, data: data });
      }
    } catch (e) {
      reject(e);
    }
  });
};
const getTypeBrain = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!req.typeBrain) {
        resolve({ errCode: -1, message: "Missing parameter" });
      } else {
        const data = await db.Products.findAll({
          where: { group: req.typeBrain.toUpperCase() },
          include: [
            {
              model: Allcodess,
              where: { type: "BRAIN" },
            },
          ],
        });

        resolve({ errCode: 0, data: data });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  getAllcodes,
  getTypeBrain,
};
