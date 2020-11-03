const express = require("express");
const mongoose = require("mongoose");
const WilderModel = require("./models/Wilder");
const wilderController = require("./controllers/wilder")
const app = express();

app.use(express.json());

//Database
mongoose
  .connect("mongodb://127.0.0.1:27017/wilderdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    autoIndex: true,
  })
  .then(() => console.log("connected database"))
  .catch((err) => console.error(err));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.get("/api/wilder", wilderController.getAll);
app.get("/api/wilder/:wilderId", wilderController.getById);
app.post("/api/wilder", wilderController.create);
app.delete("/api/wilder/:wilderId", wilderController.deleteWilderById);
app.put("/api/wilder/:wilderId", wilderController.updateById)



const portServer = 3000;
app.listen(portServer, () => {
  console.log(`Server is listening on ${portServer}`);
});
