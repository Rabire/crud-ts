import { RequestHandler } from "express";
import { UserInstance } from "models/user";
import {
  comparePasswords,
  generateAccessToken,
  generateRefreshToken,
} from "utils/auth";

//TODO: test
const login: RequestHandler = async (req, res) => {
  const { email, password } = req.body;

  // check that credentials are correct
  const user = await UserInstance.findOne({ where: { email } });
  const isPasswordCorrect = await comparePasswords(password, user?.password);
  if (!user || !isPasswordCorrect)
    return res.json({
      status: 401,
      message: "Login failed",
    });

  // refresh tokens
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

export default login;
