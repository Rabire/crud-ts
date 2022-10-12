import { RequestHandler } from "express";

import { UserInstance } from "models/user";

// TODO:
const logout: RequestHandler = async (req, res) => {
  await UserInstance.update(
    { accessToken: null, refreshToken: null },
    { where: { id: req.userId } }
  );

  return res.json({
    status: 200,
    message: "Successfully logged out",
  });
};

export default logout;
