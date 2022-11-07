import db from "../models/index";
import bcrypt from "bcryptjs";
import { createJWT, verifyToken } from "../middleWare/JWTAction";

const salt = bcrypt.genSaltSync(10);
const hashUserPassword = (password) => {
  return new Promise(async (resolve, reject) => {
    try {
      const hashPassword = await bcrypt.hashSync(password, salt);
      resolve(hashPassword);
    } catch (e) {
      reject(e);
    }
  });
};
const checkUserEmail = (email) => {
  return new Promise(async (resolve, reject) => {
    try {
      const user = await db.Users.findOne({ where: { email: email } });
      if (user) {
        resolve(true);
      } else {
        resolve(false);
      }
    } catch (e) {
      reject(e);
    }
  });
};

const createANewUser = (data) => {
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
            encode: encoded1,
          });
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};
const handleLogin = (data) => {
  return new Promise(async (resolve, reject) => {});
};

module.exports = {
  createANewUser,
  handleLogin,
};
