import { Request, Response } from 'express';
import Wilder from '../models/Wilder';
import WilderModel from '../models/Wilder';

export default {
  getAll: async (req: Request, res: Response) => {
    try {
      const wilders = await WilderModel.find();
      res.json(wilders)
    } catch (err) {
      res.send(err);
    }
  },

  getById: async (req: Request, res: Response) => {
    const wilderId = req.params.wilderId;
    try {
      const wilder = await WilderModel.findById(wilderId);
      res.json(wilder);
    } catch (err) {
      res.send(err)
    }
  },

  create: async (req: Request, res: Response) => {
    try {
      await Wilder.init();
      const wilder = new WilderModel(req.body);
      const result = await wilder.save();
      res.status(201).send(result);
    } catch(err) {
      res.send(err);
    }
  },

  deleteWilderById: async (req: Request, res: Response) => {
    try {
      const wilderId = req.params.wilderId;
      await WilderModel.deleteOne({_id: wilderId});
      res.send(`Le Wilder avec l'id ${wilderId} à été supprimé...`);
    } catch(err) {
      res.send(err);
    }
  },

  updateById: async (req: Request, res: Response) => {
    try {
      const wilderId = req.params.wilderId;
      const result = await WilderModel.updateOne({_id: wilderId}, req.body);
      res.json(result);
    } catch(err) {
      res.send(err);
    }
  },
};
