import { Request, Response } from "express";
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

const JWT_COOKIE_NAME = "jwt";

export type TokenPayload = {
  email: string;
};

export interface JwtRequest<T> extends Request<T> {
  jwt?: TokenPayload;
}

export const generateToken = (email: string | undefined) => {
  const token = jwt.sign({ email: email }, process.env.TOKEN_SECRET, {
    expiresIn: "1800s",
  });
  return token;
};

export const authUser = (req: JwtRequest<any>, res: Response, next: any) => {
  const token: string | undefined = req.header("authorization")?.split(" ")[1];

  if (token) {
    try {
      const decoded = jwt.verify(
        token,
        process.env.TOKEN_SECRET
      ) as TokenPayload;
      req.jwt = decoded;
      next();
    } catch {
      return res.sendStatus(403);
    }
  } else {
    return res.sendStatus(401);
  }
};
