import { Router } from "express";
import LoginRoute from "./login.route";

export const appRoutes = Router();

appRoutes.use("/login", LoginRoute);

export default appRoutes;
