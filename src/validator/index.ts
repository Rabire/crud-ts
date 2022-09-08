import { RequestHandler } from "express";
import { validationResult } from "express-validator";

export const handleValidationError: RequestHandler = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty()) return res.json({ error });

  next();
};

export * from "./todo";
