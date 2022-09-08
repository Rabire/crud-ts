import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import { TodoInstance } from "models/todo";

class TodoController {
  getAll: RequestHandler = async (req, res) => {
    try {
      const records = await TodoInstance.findAll();

      return res.json({
        status: 200,
        message: "Successfully fetched todos",
        data: records,
      });
    } catch (e) {
      return res.json({
        status: 500,
        message: `Failed to get all todos - ${e}`,
      });
    }
  };

  create: RequestHandler = async (req, res) => {
    const id = uuidv4();

    try {
      const record = await TodoInstance.create({ ...req.body, id });

      return res.json({
        status: 200,
        message: "Successfully created todo",
        data: record,
      });
    } catch (e) {
      return res.json({
        status: 500,
        message: `Failed to create todo - ${e}`,
      });
    }
  };
}

export default new TodoController();
