const express = require("express");
const mongoose = require("mongoose");
const WilderModel = require("./models/Wilder");
const app = express();

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
  // test a wilder creation
  WilderModel.init().then(() => {
    const firstWilder = new WilderModel({
      name: "First Wilder",
      city: "San Francisco",
      skills: [
        { title: "HTML", votes: 10 },
        { title: "React", votes: 5 },
      ],
    });
    firstWilder
      .save()
      .then((result) => {
        console.log("success: ", result);
      })
      .catch((err) => {
        console.log("error : ", err);
      });
  })
});

const portServer = 3000;
app.listen(portServer, () => {
  console.log(`Server is listening on ${portServer}`);
});
