import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import { UserInstance } from "models/user";
import { hashPassword } from "utils/auth";

class UserController {
  getAll: RequestHandler = async (req, res) => {
    const records = await UserInstance.findAll({ where: {} });

    return res.json({
      status: 200,
      message: "Successfully fetched records",
      data: records,
    });
  };

  validateToken: RequestHandler = async (req, res) => {
    return res.json({
      status: 200,
      message: "validated token",
      data: "okok",
    });
  };

  register: RequestHandler = async (req, res) => {
    const { email, password } = req.body;

    const hash = await hashPassword(password);

    const id = uuidv4();

    const record = await UserInstance.create({
      id,
      email,
      password: hash,
    });

    return res.json({
      status: 201,
      message: "Successfully created record",
      data: record,
    });
  };

  login: RequestHandler = async (req, res) => {
    const { email, password } = req.body;

    const hash = await hashPassword(password);

    const record = await UserInstance.findOne({
      where: { email, password: hash },
    });

    return res.json({
      status: 200,
      message: "Successfully logged in",
      data: record,
    });
  };
}

export default new UserController();
