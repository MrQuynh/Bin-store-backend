import express from "express";
// import homeController from "../controllers/homeController";

const router = express.Router();

const initWebRoutes = (app) => {
  // router.get("/crud", homeController.getCrudPage);
  // user

  return app.use("/", router);
};

module.exports = initWebRoutes;
