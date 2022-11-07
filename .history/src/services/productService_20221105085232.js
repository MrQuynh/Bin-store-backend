import db from "../models/index";

import { createJWT, verifyToken } from "../middleWare/JWTAction";

const createNewProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.name || !data.image || !data.group) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter",
        });
      } else {
        const product = await db.Products.create({
          name: data.name,
          image: data.image,
          priceUp: data.priceUp,
          priceDown: data.priceDown,
          group: data.group,

          brain: data.brain,
          sale: data.sale,
          color: data.color,
          rom: data.rom,
          ram: data.ram,
          screen: data.screen,
          card: data.card,
        });
        resolve({ errCode: 0, message: "ok", data: product });
      }
    } catch (e) {
      reject(e);
    }
  });
};

const handleUpdateProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    console.log(data);
    try {
      if (!data.id) {
        resolve({ errCode: 2, message: "Missing required parameters" });
      }
      const product = await db.Products.findOne({
        where: { id: data.id },
      });
      if (product) {
        product.nickName = data.nickName;
        product.address = data.address;
        product.phoneNumber = data.phoneNumber;
        product.image = data.image;

        await product.save;
        resolve({
          errCode: 0,
          message: "Update product succeeded",
          data: product,
        });
      } else {
        resolve({
          errCode: 1,
          message: "Product not found",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
const handleDeleteProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({ errCode: 1, message: "Missing parameter" });
      } else {
        const user = await db.Products.findOne({ where: { id } });
        if (!user) {
          resolve({ errCode: 2, message: "Product doesn't exist!" });
        } else {
          await db.Users.destroy({ where: { id } });
          resolve({
            errCode: 0,
            message: "This product has already been deleted",
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};
// const handleGetAllProduct = (id) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       const userLogin = await db.Users.findOne({ where: { id } });
//       if (!userLogin) {
//         resolve({ errCode: 403, errMessage: "access denied" });
//       } else {
//         const data = await db.Users.findAll({
//           attributes: {
//             exclude: ["password"],
//           },
//         });
//         resolve(data);
//       }
//     } catch (e) {
//       reject(e);
//     }
//   });
// };
module.exports = {
  createNewProduct,
  // handleGetAllProduct,
  handleUpdateProduct,
  handleDeleteProduct,
};
