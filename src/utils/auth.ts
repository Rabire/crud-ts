import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

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

// this one can expire
export const generateAccessToken = (userId: string) =>
  jwt.sign({ userId }, ACCESS_TOKEN_SECRET, { expiresIn: "15s" });

export const generateRefreshToken = (userId: string) =>
  jwt.sign({ userId }, REFRESH_TOKEN_SECRET, { expiresIn: "1y" });

// const refreshAccessToken = (refreshToken: string) => {
//   // si on a un refresh token in db

//   const user;

//   if (true) {
//     jwt.verify(refreshToken, REFRESH_TOKEN_SECRET, (err, userId) => {
//       if (err) throw `Error while refreshing token : ${err}`;

//       const newAccessToken = generateAccessToken(user.id);

//       // MAJ user
//     });
//   }
// };

// https://youtu.be/mbsmsi7l3r4?t=1338
