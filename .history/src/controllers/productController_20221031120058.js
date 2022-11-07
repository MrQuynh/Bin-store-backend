import db from "../models/index";

import productService from "../services/productService";

const createNewProduct = async (req, res) => {
  try {
    const data = await productService.createNewProduct(req.body);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from services...",
    });
  }
};

const handleDeleteProduct = async (req, res) => {
  try {
    const data = await productService.handleDeleteProduct(req.body.id);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from services...",
    });
  }
};
const handleUpdateProduct = async (req, res) => {
  try {
    const data = await productService.handleUpdateProduct(req.body);
    return res.status(200).json(data);
  } catch (e) {
    console.log(e);
    return res.status(200).json({
      errCode: -1,
      message: "Error from services...",
    });
  }
};
const handleGetAllProduct = async (req, res) => {
  try {
    const data = await productService.handleGetAllUsers(req.userId);
    // console.log(req.userId);
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
  createNewProduct,
  handleDeleteProduct,
  handleGetAllProduct,
  handleUpdateProduct,
};
