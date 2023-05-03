import db from "../models/index";

import { createJWT, verifyToken } from "../middleWare/JWTAction";

const createAConversation = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!req.body.receiverId) {
        resolve({
          errCode: -1,
          message: "Missing parameter",
        });
      } else {
        await db.Conversations.create({
          memberOneId: +req.userId,
          memberTwoId: +req.body.receiverId,
        });
        resolve({
          errCode: 0,
          message: "Create conversation successfully!",
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
const getConversations = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Conversations.findAll({
        where: { memberOneId: req.userId },
      });
      resolve({
        errCode: 0,
        message: "Create conversation successfully!",
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createAConversation,
  getConversations,
};
