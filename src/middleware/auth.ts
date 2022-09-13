import { RequestHandler } from "express";
// import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserAttributes } from "models/user";

dotenv.config();

// const generateAccessToken = () => jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {expiresIn "1800s"});

// const TOKEN_EXPIRE_TIME = 3600;
// const TOKEN_ISSUER = "coolIssuer";
// const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "encodedSecret";

export const extractJWT: RequestHandler = (req, res, next) => {
  // TODO: validator

  // const token = req.headers.authorization?.split(" ")[1];

  // if (token)
  //   jwt.verify(token, ACCESS_TOKEN_SECRET, (error, decoded) => {
  //     if (error) return res.status(404).json({ message: error.message, error });

  //     res.locals.jwt = decoded;
  //     next();
  //   });

  return res.status(401).json({ message: "Unauthorized" });
};
