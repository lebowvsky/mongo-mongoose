import express from 'express';
const wilderRouter = express.Router();

import wilderController from '../controllers/wilder';

wilderRouter
  .route('/')
  .get(wilderController.getAll)
  .post(wilderController.create);

wilderRouter
  .route('/:wilderId')
  .get(wilderController.getById)
  .delete(wilderController.deleteWilderById)
  .put(wilderController.updateById);

export default wilderRouter;
