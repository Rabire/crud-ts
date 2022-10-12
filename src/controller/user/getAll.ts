import { RequestHandler } from "express";
import { UserInstance } from "models/user";

// TODO: test
const getAll: RequestHandler = async (req, res) => {
  const records = await UserInstance.findAll();

  return res.json({
    status: 200,
    message: "Successfully fetched records",
    data: records,
  });
};

export default getAll;
