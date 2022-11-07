import express from "express";
import userController from "../controllers/userController";
import { authorToken } from "../middleWare/JWTAction";

const router = express.Router();

const initWebRoutes = (app) => {
  // router.get("/crud", userController.getCrudPage);
  // user
  router.post("/sign-up-user", userController.createANewUser);
  router.post("/login-user", userController.handleLogin);
  router.post("/delete-user", userController.handleDeleteUser);
  router.post("/update-user", userController.handleUpdateUser);
  router.get("/get-all-users", authorToken, userController.handleGetAllUsers);
  return app.use("/", router);
};

module.exports = initWebRoutes;
