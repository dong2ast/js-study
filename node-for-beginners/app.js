const express = require("express");
const app = express();
const cors = require("cors");

app.set("port", process.env.PORT || 8080);
app.set("host", process.env.HOST || "0.0.0.0");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const boardRouter = require("./router/board");
const detailRouter = require("./router/detail");

app.listen(app.get("port"), app.get("host"), () => {
  console.log(
    `서버가 실행됩니다. http://${app.get("host")}:${app.get("port")}`
  );
});

app.use("/", boardRouter);
app.use("/detail", detailRouter);
