import db from "../models/index";

import { createJWT, verifyToken } from "../middleWare/JWTAction";

const createNewProduct = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (
        !data.email ||
        !data.password ||
        !data.nickName ||
        !data.phoneNumber
      ) {
        resolve({
          errCode: 1,
          errMessage: "Missing required parameter",
        });
      } else {
        const check = await checkUserEmail(data.email);
        if (check === true) {
          resolve({
            errCode: 1,
            message: "Your email is already in used, Plz try an other email!",
          });
        } else {
          const hashPasswordFromBcrypt = await hashUserPassword(data.password);
          const user = await db.Users.create({
            email: data.email,
            password: hashPasswordFromBcrypt,
            nickName: data.nickName,
            role: "R1",
            phoneNumber: data.phoneNumber,
          });
          const token = createJWT(user.id);

          resolve({
            errCode: 0,
            data: user,
            token: token,
          });
        }
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
      if (
        !data.id ||
        !data.nickName ||
        !data.address ||
        !data.phoneNumber ||
        !data.image
      ) {
        resolve({ errCode: 2, message: "Missing required parameters" });
      }
      const user = await db.Users.findOne({
        where: { id: data.id },
      });
      if (user) {
        user.nickName = data.nickName;
        user.address = data.address;
        user.phoneNumber = data.phoneNumber;
        user.image = data.image;

        await user.save();
        resolve({
          errCode: 0,
          message: "Update user succeeded",
          data: user,
        });
      } else {
        resolve({
          errCode: 1,
          message: "User not found",
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
        const user = await db.Users.findOne({ where: { id } });
        if (!user) {
          resolve({ errCode: 2, message: "User doesn't exist!" });
        } else {
          await db.Users.destroy({ where: { id } });
          resolve({
            errCode: 0,
            message: "This user has already been deleted",
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};
const handleGetAllProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const userLogin = await db.Users.findOne({ where: { id } });
      if (!userLogin) {
        resolve({ errCode: 403, errMessage: "access denied" });
      } else {
        const data = await db.Users.findAll({
          attributes: {
            exclude: ["password"],
          },
        });
        resolve(data);
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createNewProduct,
  handleGetAllProduct,
  handleUpdateProduct,
  handleDeleteProduct,
};
