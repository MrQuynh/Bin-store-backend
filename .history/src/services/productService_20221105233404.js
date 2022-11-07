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
        product.name = data.name;
        product.brain = data.brain;
        product.priceUp = data.priceUp;
        product.priceDown = data.priceDown;
        product.ram = data.ram;
        product.rom = data.rom;
        product.screen = data.screen;
        product.sale = data.sale;
        product.card = data.card;
        product.group = data.group;
        product.image = data.image;
        product.color = data.color;

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
const handleGetAllProducts = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Products.findAll();
      resolve({
        errCode: 0,
        message: "ok",
        data: data,
      });
    } catch (e) {
      reject(e);
    }
  });
};
const handleGetAProduct = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!id) {
        resolve({ errCode: 2, message: "Missing required parameters" });
      } else {
        const data = await db.Products.findOne({ where: { id: id } });
        resolve({
          errCode: 0,
          message: "ok",
          data: data,
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
const handleGetAGroup = (type) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!type) {
        const data = await db.Products.findAll();
        resolve({
          errCode: 0,
          message: "ok",
          data: data,
        });
      } else {
        console.log(type);
        const data = await db.Products.findAll({ where: { group: type } });
        resolve({
          errCode: 0,
          message: "ok",
          data: data || [],
        });
      }
    } catch (e) {
      reject(e);
    }
  });
};
const handleSearch = (q) => {
  return new Promise(async (resolve, reject) => {
    try {
      const data = await db.Products.findAll({
        [Op.or]: [{ name: { [Op.like]: "%" + q + "%" } }],
      });

      resolve({
        errCode: 0,
        message: "ok",
        data: data || [],
      });
    } catch (e) {
      reject(e);
    }
  });
};

module.exports = {
  createNewProduct,
  handleGetAllProducts,
  handleUpdateProduct,
  handleDeleteProduct,
  handleGetAProduct,
  handleGetAGroup,
  handleSearch,
};
