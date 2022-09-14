import { UserInstance } from "models/user";

export const getUserById = async (id: string) =>
  await UserInstance.findOne({ where: { id }, raw: true });
