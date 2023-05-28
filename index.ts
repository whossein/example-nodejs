import express, { Express } from "express";
import morgan from "morgan";
import bodyParser from "body-parser";
import cors from "cors";
import appRoutes from "./router";

const app: Express = express();
const port = 4000;

app.use(morgan("dev"));
app.use(cors());
app.use(bodyParser.json({ limit: "50mb", type: "application/json" }));
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use(appRoutes);

// app.get("/", (req: Request, res: Response) => {
//   res.json({
//     message: "Hellowordl",
//   });
// });

// app.post("/", (req: Request, res: Response) => {
//   console.log("body: ", req.body);

//   res.status(200).json({
//     message: "Hellowordl22222",
//     data: req.body,
//   });
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
