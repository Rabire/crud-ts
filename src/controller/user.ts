import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";

import { UserInstance } from "models/user";
import {
  hash,
  comparePasswords,
  generateAccessToken,
  generateRefreshToken,
} from "utils/auth";

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
    });

    const record = await createdUser.update({
      accessToken: generateAccessToken(createdUser.id),
      refreshToken: generateRefreshToken(createdUser.id),
    }); // TODO: find a way to access id before creation ?

    return res.json({
      status: 201,
      message: "Successfully created record",
      data: record,
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
    // TODO:
    // need token
    // delete tokens
  };

  refreshToken: RequestHandler = async (req, res) => {
    // TODO: validator
    const { refreshToken } = req.body;

    // TODO:
    // si le token est expiré
    //TODO: MAJ accessToken grace au refreshToken

    // si le refreshToken est expiré
    // demande une reconnextion
  };
}

export default new UserController();
