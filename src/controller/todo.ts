import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import { TodoInstance } from "models/todo";
import { getPagination } from "utils/pagination";
// import { getUserById } from "utils/user";

class TodoController {
  getAll: RequestHandler = async (req, res) => {
    const { limit, offset } = getPagination(req);

    // const user = await getUserById(req.userId);
    // console.log({ user });

    const records = await TodoInstance.findAll({ where: {}, limit, offset });

    return res.json({
      status: 200,
      message: "Successfully fetched records",
      data: records,
    });
  };

  getById: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const record = await TodoInstance.findOne({ where: { id } });

    return res.json({
      status: 200,
      message: "Successfully fetched record",
      data: record,
    });
  };

  create: RequestHandler = async (req, res) => {
    const id = uuidv4();

    const record = await TodoInstance.create({ ...req.body, id });

    return res.json({
      status: 201,
      message: "Successfully created record",
      data: record,
    });
  };

  update: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const record = await TodoInstance.findOne({ where: { id } });

    if (!record)
      return res.json({
        status: 400,
        message: "Cannot find record",
      });

    const updatedRecord = await record.update({ ...req.body });

    return res.json({
      status: 200,
      message: "Successfully updated record",
      data: updatedRecord,
    });
  };

  delete: RequestHandler = async (req, res) => {
    const { id } = req.params;

    const record = await TodoInstance.findOne({ where: { id } });

    if (!record)
      return res.json({
        status: 400,
        message: "Cannot find record",
      });

    const deletedRecord = await record.update({ ...req.body });

    return res.json({
      status: 200,
      message: "Successfully deleted record",
      data: deletedRecord,
    });
  };
}

export default new TodoController();
