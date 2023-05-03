import db from "../models/index";

import { createJWT, verifyToken } from "../middleWare/JWTAction";

const createAConversation = (req) => {
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

module.exports = {
  createAConversation,
};
