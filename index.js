"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const router_1 = __importDefault(require("./router"));
const app = (0, express_1.default)();
const port = 4000;
app.use((0, morgan_1.default)("dev"));
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json({ limit: "50mb", type: "application/json" }));
app.use(body_parser_1.default.urlencoded({
    extended: true,
}));
app.use(router_1.default);
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
