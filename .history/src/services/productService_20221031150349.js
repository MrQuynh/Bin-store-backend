import db from "../models/index";

import { createJWT, verifyToken } from "../middleWare/JWTAction";

const createNewProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!data.name || !data.image || !data.price || !data.group) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter",
        });
      } else {
        const product = await db.Products.create({
          name: data.name,
          image: data.image,
          price: data.price,
          group: data.group,
          name: data.name,
          brain: data.brain,
          sale: data.sale,
          color: data.color,
          likeCounts: data.likeCounts,
          descriptionHTML: data.descriptionHTML,
          descriptionMarkdown: data.descriptionMarkdown,
          informationHTML: data.informationHTML,
          informationMarkdown: data.informationMarkdown,
        });
        resolve({ errCode: 0, message: "ok", data: product });
      }
    } catch (e) {
      reject(e);
    }
  });
};

// const handleUpdateProduct = (data) => {
//   return new Promise(async (resolve, reject) => {
//     console.log(data);
//     try {
//       if (
//         !data.id ||
//         !data.nickName ||
//         !data.address ||
//         !data.phoneNumber ||
//         !data.image
//       ) {
//         resolve({ errCode: 2, message: "Missing required parameters" });
//       }
//       const user = await db.Users.findOne({
//         where: { id: data.id },
//       });
//       if (user) {
//         user.nickName = data.nickName;
//         user.address = data.address;
//         user.phoneNumber = data.phoneNumber;
//         user.image = data.image;

//         await user.save();
//         resolve({
//           errCode: 0,
//           message: "Update user succeeded",
//           data: user,
//         });
//       } else {
//         resolve({
//           errCode: 1,
//           message: "User not found",
//         });
//       }
//     } catch (e) {
//       reject(e);
//     }
//   });
// };
// const handleDeleteProduct = (id) => {
//   return new Promise(async (resolve, reject) => {
//     try {
//       if (!id) {
//         resolve({ errCode: 1, message: "Missing parameter" });
//       } else {
//         const user = await db.Users.findOne({ where: { id } });
//         if (!user) {
//           resolve({ errCode: 2, message: "User doesn't exist!" });
//         } else {
//           await db.Users.destroy({ where: { id } });
//           resolve({
//             errCode: 0,
//             message: "This user has already been deleted",
//           });
//         }
//       }
//     } catch (e) {
//       reject(e);
//     }
//   });
// };
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
  // handleUpdateProduct,
  // handleDeleteProduct,
};
