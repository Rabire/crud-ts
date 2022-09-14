import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

export const hash = async (rawPassword: string) => bcrypt.hash(rawPassword, 10);

export const comparePasswords = async (
  rawPassword: string,
  hashedPassword = ""
) => await bcrypt.compare(rawPassword, hashedPassword);

const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET || "accessSecret";
// const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET || "refreshSecret";

export const createToken = (userId: string) =>
  jwt.sign(userId, ACCESS_TOKEN_SECRET);
