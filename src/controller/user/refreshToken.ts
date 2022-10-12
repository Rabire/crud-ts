import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

import { isUserLoggedIn, expendAccessTokenExpiration } from "utils/auth";

dotenv.config();

const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "refreshSecret";

// TODO: test
const refreshToken: RequestHandler = async (req, res) => {
  const refreshToken = req.body.token as string;

  jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, async (err, payload) => {
    // check refreshToken validity
    if (err)
      return res.json({
        status: 401,
        message: "Authentication failed - invalid refreshToken",
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

      // refresh access token
      // FYI the only way to refresh refreshToken is to login
      const newAccessToken = await expendAccessTokenExpiration(userId);

      return res.json({
        status: 200,
        message: "Token refreshed successfully",
        data: { accessToken: newAccessToken },
      });
    }
  });
};

export default refreshToken;
