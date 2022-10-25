import { RequestHandler } from "express";
import { PetInstance } from "models/animal";

const getById: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const record = await PetInstance.findOne({
    where: { id },
  });

  return res.json({
    status: 200,
    message: "Successfully fetched record",
    data: record,
  });
};

export default getById;
