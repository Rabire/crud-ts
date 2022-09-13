import bcrypt from "bcryptjs";

export const hashPassword = async (rawPassword: string) => {
  const salt = await bcrypt.genSalt();

  return bcrypt.hash(rawPassword, salt);
};
