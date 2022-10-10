import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { UserInstance } from "models/user";

dotenv.config();

export const hash = async (rawPassword: string) =>
  await bcrypt.hash(rawPassword, 10);

export const comparePasswords = async (
  rawPassword: string,
  hashedPassword = ""
) => await bcrypt.compare(rawPassword, hashedPassword);

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "accessSecret";
const REFRESH_TOKEN_SECRET =
  process.env.REFRESH_TOKEN_SECRET || "refreshSecret";

export const generateAccessToken = (userId: string) =>
  jwt.sign({ userId }, ACCESS_TOKEN_SECRET, { expiresIn: "1h" });

export const generateRefreshToken = (userId: string) =>
  jwt.sign({ userId }, REFRESH_TOKEN_SECRET, { expiresIn: "1y" });

export const isUserLoggedIn = async (userId: string) => {
  const user = await UserInstance.findOne({ where: { id: userId } });
  return Boolean(user?.refreshToken);
};

export const expendAccessTokenExpiration = async (userId: string) => {
  const newAccessToken = generateAccessToken(userId);

  await UserInstance.update(
    { accessToken: newAccessToken },
    { where: { id: userId } }
  );

  return newAccessToken;
};
