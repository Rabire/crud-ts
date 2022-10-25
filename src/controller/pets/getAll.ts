import { RequestHandler } from "express";
import { PetInstance } from "models/pets";
import { getPagination } from "utils/pagination";

const getAll: RequestHandler = async (req, res) => {
  const { limit, offset } = getPagination(req);

  const records = await PetInstance.findAll({
    where: { deletedAt: null },
    limit,
    offset,
  });

  return res.json({
    status: 200,
    message: "Successfully fetched records",
    data: records,
  });
};

export default getAll;
