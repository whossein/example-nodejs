import { Router, Request, Response } from "express";

export const api = Router();
// /login

// /login/otp
api.get("/otp", (req: Request, res: Response) => {
  res.json({
    message: "Hellowordl",
  });
});

export default api;
