import { RequestHandler } from "express";
import { PetInstance } from "models/pets";

const deletePet: RequestHandler = async (req, res) => {
  const { id } = req.params;

  const record = await PetInstance.findOne({ where: { id } });

  if (!record)
    return res.json({
      status: 404,
      message: "Cannot find record",
    });

  const deletedRecord = await record.update({ deletedAt: new Date() });

  return res.json({
    status: 200,
    message: "Successfully deleted record",
    data: deletedRecord.id,
  });
};

export default deletePet;
