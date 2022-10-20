import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

export const generateToken = (full_name: string) => {
  return jwt.sign({ username: full_name }, process.env.TOKEN_SECRET, {
    expiresIn: "1800s",
  });
};

export const authUser = (req: Request, res: Response, next: any) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).send("No token exist.");

  jwt.verify(
    token,
    process.env.TOKEN_SECRET as string,
    (err: any, user: any) => {

      if (err) return res.status(403).send("Token not verifiable");

      req.body = user;

      next();
    }
  );
};
