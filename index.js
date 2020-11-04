const express = require("express");
const mongoose = require("mongoose");
const app = express();
const wilderRouter = require("./routers/wilder.router");

app.use(express.json());
app.use("/api/wilders", wilderRouter);


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



const portServer = 3000;
app.listen(portServer, () => {
  console.log(`Server is listening on ${portServer}`);
});
