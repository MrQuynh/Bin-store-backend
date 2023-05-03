import db from "../models/index";
import bcrypt from "bcryptjs";
import { createJWT, verifyToken } from "../middleWare/JWTAction";

const createAComment = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      // console.log("qunyh", req.userId);
      // return "ok";
      if (!req.body.comment || !req.body.productId) {
        resolve({
          errCode: -1,
          message: "Missing parameter",
        });
      } else {
        await db.Comments.create({
          userId: req.userId,
          productId: req.body.productId,
          comment: req.body.comment,
        });
        resolve({
          errCode: 0,
          message: "Create comment successfully!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
const getAllComment = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({
          errCode: -1,
          message: "Missing parameter",
        });
      } else {
        const count = await db.Comments.count(where: { productId: id },);
        const data = await db.Comments.findAll({
          where: { productId: id },
          include: [
            {
              model: db.Users,
              as: "userData",
              attributes: ["nickName", "image"],
            },
          ],
          raw: true,
          nest: true,
        });
        resolve({
          errCode: 0,
          message: "ok",
          data: data.reverse(),
          count: count,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
const deleteAComment = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      // console.log(req.userId, req.query.commentId);
      // return;
      if (!req.userId || !req.query.commentId) {
        resolve({
          errCode: -1,
          message: "Missing parameter",
        });
      } else {
        const data = await db.Comments.findOne({
          where: { id: req.query.commentId },
        });
        if (!data) {
          resolve({
            errCode: -3,
            message: "This comment does not exist",
          });
        } else {
          if (+data.userId === +req.userId) {
            await db.Comments.destroy({ where: { id: req.query.commentId } });
            resolve({
              errCode: 0,
              message: "Deleted comment successfully!",
            });
          } else {
            resolve({
              errCode: -2,
              message: "Use cannot delete this comment.",
            });
          }
        }
      }
    } catch (e) {
      reject(e);
    }
  });
};
module.exports = {
  createAComment,
  getAllComment,
  deleteAComment,
};
