import { RequestHandler } from "express";
import { Todo } from "models/todo";

export const getAll: RequestHandler = async (req, res, next) => {
  const allTodos: Todo[] = await Todo.findAll();

  return res
    .status(200)
    .json({ message: "todos fetched successfully", data: allTodos });
};
