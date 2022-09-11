import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import { TodoInstance } from "models/todo";
import { getPagination } from "utils/pagination";

class TodoController {
  getAll: RequestHandler = async (req, res) => {
    const { limit, offset } = getPagination(req);

    const records = await TodoInstance.findAll({ where: {}, limit, offset });

    return res.json({
      status: 200,
      message: "Successfully fetched todos",
      data: records,
    });
  };

  getById: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const record = await TodoInstance.findOne({ where: { id } });

    return res.json({
      status: 200,
      message: "Successfully fetched todo",
      data: record,
    });
  };

  create: RequestHandler = async (req, res) => {
    const id = uuidv4();

    const record = await TodoInstance.create({ ...req.body, id });

    return res.json({
      status: 201,
      message: "Successfully created todo",
      data: record,
    });
  };

  update: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const record = await TodoInstance.findOne({ where: { id } });

    if (!record)
      return res.json({
        status: 400,
        message: "Cannot find todo",
      });

    const updatedRecord = await record.update({ ...req.body });

    return res.json({
      status: 200,
      message: "Successfully updated todo",
      data: updatedRecord,
    });
  };
}

export default new TodoController();
