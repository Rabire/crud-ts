import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";

import { UserInstance } from "models/user";
import { hash, comparePasswords, createToken } from "utils/auth";

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

    const record = await UserInstance.create({
      id,
      email,
      password: hashedPassword,
    });

    return res.json({
      status: 201,
      message: "Successfully created record",
      data: record,
    });
  };

  login: RequestHandler = async (req, res) => {
    const { email, password } = req.body;

    const record = await UserInstance.findOne({ where: { email }, raw: true });

    console.log({ record });

    const isPasswordCorrect = await comparePasswords(
      password,
      record?.password
    );

    if (!record || !isPasswordCorrect)
      return res.json({
        status: 401,
        message: "Login failed",
      });

    const withToken = {
      ...record,
      accessToken: createToken(record.id),
    };

    return res.json({
      status: 200,
      message: "Successfully logged in",
      data: withToken,
    });
  };
}

export default new UserController();
