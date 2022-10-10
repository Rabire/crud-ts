import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { expendAccessTokenExpiration, isUserLoggedIn } from "utils/auth";

dotenv.config();

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "accessSecret";

export const validateToken: RequestHandler = (req, res, next) => {
  // TODO: validator & remove manual validation bellow

  const token = (req.headers.token as string) || undefined;
  if (!token) throw Error("access token not provided in header");

  jwt.verify(token, ACCESS_TOKEN_SECRET, async (err, payload) => {
    if (err)
      return res.json({
        status: 401,
        message: "Authentication failed - invalid token",
      });

    if (payload) {
      const userId = Object.values(payload)[0] as string;

      isUserLoggedIn(userId).then((isLoggedIn) => {
        if (!isLoggedIn)
          return res.json({
            status: 401,
            message: "Authentication failed - user logged out",
          });
      });

      req.userId = userId; // storing userId in req

      await expendAccessTokenExpiration(userId);

      return next();
    }
  });
};
