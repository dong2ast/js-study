const express = require("express");
const db = require("./config/mysql.js");
const app = express();
const conn = db.init();
const cors = require("cors");

app.set("port", process.env.PORT || 8080);
app.set("host", process.env.HOST || "0.0.0.0");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/comment", (req, res) => {});

app.get("/", (req, res) => {
  //여기가 DAO 연결부
  const sql = "select * from board";
  conn.query(sql, function (err, result) {
    if (err) console.log("quert is not excute" + err);
    else {
      //   res.send(result);
      res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
      res.json;
      res.end(
        JSON.stringify({
          data: {
            boardList: result,
          },
        })
      );
    }
  });
  //여기가 DTO 연결부
  //   res.writeHead(200, { "Content-Type": "application/json" });
  //   res.end(
  //     JSON.stringify({
  //       data: "Hello",
  //     })
  //   );
});

app.listen(app.get("port"), app.get("host"), () => {
  console.log(
    `서버가 실행됩니다. http://${app.get("host")}:${app.get("port")}`
  );
});
