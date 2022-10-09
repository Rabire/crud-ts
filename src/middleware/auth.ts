import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserInstance } from "models/user";
import { generateAccessToken } from "utils/auth";

dotenv.config();

// const TOKEN_EXPIRE_TIME = 3600;
// const TOKEN_ISSUER = "coolIssuer";
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "accessSecret";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "refreshSecret";

export const validateToken: RequestHandler = (req, res, next) => {
  // TODO: validator

  const token = (req.headers.token as string) || undefined;

  if (!token) throw Error("access token not provided in header");

  jwt.verify(token, ACCESS_TOKEN_SECRET, async (err, payload) => {
    if (err)
      return res.json({
        status: 401,
        message: "Authentication failed",
      });

    if (payload) {
      const userId = Object.values(payload)[0] as string;

      req.userId = userId; // storing userId in req

      // lengthening accessToken expiration
      await UserInstance.update(
        { accessToken: generateAccessToken(userId) },
        { where: { id: userId } }
      );

      return next();
    }
  });
};
