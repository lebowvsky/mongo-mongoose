const WilderModel = require("../models/Wilder");

module.exports = {
  getAll: (req, res) => {
    WilderModel.find()
      .then((result) => {
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.send(err);
      });
  },

  getById: (req, res) => {
    const wilderId = req.params.wilderId;
    WilderModel.findById(wilderId)
      .then((result) => {
        res.json({ success: true, result: result });
      })
      .catch((err) => {
        res.send(err);
      });
  },

  create: (req, res) => {
    WilderModel.init().then(() => {
      const wilder = new WilderModel(req.body);
      wilder
        .save()
        .then((result) => {
          res.json({ success: true, result: result });
        })
        .catch((err) => {
          res.json({ success: false, result: err });
        });
    });
  },

  deleteWilderById: (req, res) => {
    const wilderId = req.params.wilderId;
    WilderModel.deleteOne({_id: wilderId})
      .then(() => {
        res.send(`Le Wilder avec l'id ${wilderId} à été supprimé...`);
      })
      .catch((err) => {
        res.json({ success: false, result: err });
      });
  },

  updateById: (req, res) => {
    const wilderId = req.params.wilderId;
    WilderModel.updateOne({_id: wilderId}, req.body)
      .then(result => {
        res.json({ success: true, result: result })
      })
      .catch(err => {
        res.json({ success: false, result: err }); 
      })
  }
};
