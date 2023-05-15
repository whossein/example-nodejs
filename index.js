const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");

const app = express();
const port = 4000;

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.json({
    message: "Hellowordl",
  });
});

app.post("/", (req, res) => {
  console.log("body: ", req.body);

  res.status(200).json({
    message: "Hellowordl22222",
    data: req.body,
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
