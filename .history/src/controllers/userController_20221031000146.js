import db from "../models/index";

import userService from "../services/userService";

const createANewUser = async (req, res) => {
  try {
    const data = await userService.createANewUser(req.body);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from services...",
    });
  }
};
const handleLogin = async (req, res) => {
  try {
    const data = await userService.handleLogin(req.body);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from services...",
    });
  }
};
const handleDeleteUser = async (req, res) => {
  try {
    const data = await userService.handleDeleteUser(req.body.id);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from services...",
    });
  }
};
module.exports = {
  createANewUser,
  handleLogin,
  handleDeleteUser,
};
