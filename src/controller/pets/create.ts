import { RequestHandler } from "express";
import { PetInstance } from "models/pets";

const create: RequestHandler = async (req, res) => {
  const record = await PetInstance.create({ ...req.body });

  return res.json({
    status: 201,
    message: "Successfully created record",
    data: record,
  });
};

export default create;
