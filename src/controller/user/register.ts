import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";

import { UserInstance } from "models/user";
import { hash, generateAccessToken, generateRefreshToken } from "utils/auth";

// TODO: test
const register: RequestHandler = async (req, res) => {
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

export default register;
