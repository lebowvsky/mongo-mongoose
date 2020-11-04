const express = require("express");
let wilderRouter = express.Router();

const wilderController = require("../controllers/wilder");

wilderRouter.route("/")
  .get(wilderController.getAll)
  .post(wilderController.create);

wilderRouter.route("/:wilderId")
  .get(wilderController.getById)
  .delete(wilderController.deleteWilderById)
  .put(wilderController.updateById);

module.exports = wilderRouter;
