import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

const initWebRoutes = (app) => {
  // router.get("/crud", userController.getCrudPage);
  // user
  router.post("/sign-up", userController.createANewUser);
  router.post("/login", userController.handleLogin);
  return app.use("/", router);
};

module.exports = initWebRoutes;
