import { RequestHandler } from "express";
import { PetInstance } from "models/pets";

const create: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const record = await PetInstance.findOne({ where: { id } });

  if (!record)
    return res.json({
      status: 404,
      message: "Cannot find record",
    });

  const updatedRecord = await record.update({ ...req.body });

  return res.json({
    status: 200,
    message: "Successfully updated record",
    data: updatedRecord,
  });
};

export default create;
