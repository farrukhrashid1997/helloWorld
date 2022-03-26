import express from "express";
import bodyParser from "body-parser";
import router from "./routes/helloWorld.js";

const app = express();

app.use(bodyParser.json()); // application/json

app.use("/", router);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.listen(8080, () => {
  console.log("server running");
});
