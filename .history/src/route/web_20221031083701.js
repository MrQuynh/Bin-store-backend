import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

const initWebRoutes = (app) => {
  // router.get("/crud", userController.getCrudPage);
  // user
  router.post("/sign-up-user", userController.createANewUser);
  router.post("/login-user", userController.handleLogin);
  router.post("/delete-user", userController.handleDeleteUser);
  router.post("/get-all-users", userController.handleGetAllUsers);
  return app.use("/", router);
};

module.exports = initWebRoutes;
