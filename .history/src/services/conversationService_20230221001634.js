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
          memberOneId: +0,
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
      const data = await db.Conversations.findAll({
        where: { memberOneId: req.userId },
      });
      resolve({
        errCode: 0,
        message: "ok!",
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};
const createAMessage = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!req.body.conversationId) {
        resolve({
          errCode: -1,
          message: "Missing parameter",
        });
      } else {
        const data = await db.Messages.create({
          senderId: +req.userId,
          conversationId: +req.body.conversationId,
          text: req.body.text,
        });
        resolve({
          errCode: 0,
          message: "Send a message successfully!",
          data: data,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
const getAConversation = (req) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!req.params.conversationId) {
        resolve({
          errCode: -1,
          message: "Missing parameter",
        });
      } else {
        const data = await db.Messages.findAll({
          where: { conversationId: req.params.conversationId },
        });
        resolve({
          errCode: 0,
          message: "Ok!",
          data: data,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createAConversation,
  getConversations,
  createAMessage,
  getAConversation,
};
