import express from "express";
import userController from "../controllers/userController";

const router = express.Router();

const initWebRoutes = (app) => {
  // router.get("/crud", userController.getCrudPage);
  // user
  router.post("/sign-up", userController.createANewUser);
  return app.use("/", router);
};

module.exports = initWebRoutes;
