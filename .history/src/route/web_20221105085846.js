import express from "express";
import userController from "../controllers/userController";
import productController from "../controllers/productController";
import { authorToken } from "../middleWare/JWTAction";

const router = express.Router();

const initWebRoutes = (app) => {
  // user
  router.post("/sign-up-user", userController.createANewUser);
  router.post("/login-user", userController.handleLogin);
  router.post("/delete-user", userController.handleDeleteUser);
  router.post("/update-user", userController.handleUpdateUser);
  router.get("/get-all-users", authorToken, userController.handleGetAllUsers);

  // products
  router.post("/create-product", productController.createNewProduct);
  router.post("/delete-product", productController.handleDeleteProduct);
  router.post("/update-product", productController.handleUpdateProduct);
  router.post("/get-all-products", productController.handleGetAllProducts);
  // router.get(
  //   "/get-all-product",
  //   authorToken,
  //   userController.handleGetAllProduct
  // );

  return app.use("/", router);
};

module.exports = initWebRoutes;
