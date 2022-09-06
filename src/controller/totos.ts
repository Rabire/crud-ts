import { RequestHandler } from "express";
import { Todos } from "models/todos";

export const getAll: RequestHandler = async (req, res, next) => {
  const allTodos: Todos[] = await Todos.findAll();

  return res
    .status(200)
    .json({ message: "todos fetched successfully", data: allTodos });
};
