import { RequestHandler } from "express";
import jwt, { VerifyErrors, JwtPayload } from "jsonwebtoken";
import dotenv from "dotenv";
import { v4 as uuidv4 } from "uuid";

import { UserInstance } from "models/user";
import {
  hash,
  comparePasswords,
  generateAccessToken,
  generateRefreshToken,
  isUserLoggedIn,
  expendAccessTokenExpiration,
} from "utils/auth";

dotenv.config();

const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "refreshSecret";

class UserController {
  getAll: RequestHandler = async (req, res) => {
    const records = await UserInstance.findAll();

    return res.json({
      status: 200,
      message: "Successfully fetched records",
      data: records,
    });
  };

  register: RequestHandler = async (req, res) => {
    const { email, password } = req.body;

    const hashedPassword = await hash(password);

    const id = uuidv4();

    const createdUser = await UserInstance.create({
      id,
      email,
      password: hashedPassword,
      accessToken: generateAccessToken(id),
      refreshToken: generateRefreshToken(id),
    });

    return res.json({
      status: 201,
      message: "Successfully created record",
      data: createdUser,
    });
  };

  login: RequestHandler = async (req, res) => {
    const { email, password } = req.body;

    const user = await UserInstance.findOne({ where: { email } });

    const isPasswordCorrect = await comparePasswords(password, user?.password);

    if (!user || !isPasswordCorrect)
      return res.json({
        status: 401,
        message: "Login failed",
      });

    const updatedUser = await user.update({
      accessToken: generateAccessToken(user.id),
      refreshToken: generateRefreshToken(user.id),
    });

    return res.json({
      status: 200,
      message: "Successfully logged in",
      data: updatedUser,
    });
  };

  logout: RequestHandler = async (req, res) => {
    await UserInstance.update(
      { accessToken: null, refreshToken: null },
      { where: { id: req.userId } }
    );

    return res.json({
      status: 200,
      message: "Successfully logged out",
    });
  };

  refreshToken: RequestHandler = async (req, res) => {
    // TODO: validator & remove manual validation bellow

    const refreshToken = (req.body.refreshToken as string) || undefined;
    if (!refreshToken) throw Error("access token not provided in header");

    jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, async (err, payload) => {
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

        const newAccessToken = await expendAccessTokenExpiration(userId);

        return res.json({
          status: 401,
          message: "Authentication failed - invalid token",
          data: { accessToken: newAccessToken },
        });
      }
    });
  };
}

export default new UserController();
