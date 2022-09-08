import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import { TodoInstance } from "models/todo";

class TodoController {
  getAll: RequestHandler = async (req, res) => {
    const records = await TodoInstance.findAll();

    return res.json({
      status: 200,
      message: "Successfully fetched todos",
      data: records,
    });
  };

  create: RequestHandler = async (req, res) => {
    const id = uuidv4();

    const record = await TodoInstance.create({ ...req.body, id });

    return res.json({
      status: 200,
      message: "Successfully created todo",
      data: record,
    });
  };
}

export default new TodoController();
