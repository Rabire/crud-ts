import { RequestHandler } from "express";
import { v4 as uuidv4 } from "uuid";
import { TodoInstance } from "models/todo";

export const getAll: RequestHandler = async (req, res) => {
  const allTodos = await TodoInstance.findAll();

  return res
    .status(200)
    .json({ message: "Successfully fetched todos", data: allTodos });
};

export const create: RequestHandler = async (req, res) => {
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
