import { RequestHandler } from "express";
import { validationResult } from "express-validator";

const handleValidation: RequestHandler = (req, res, next) => {
  const error = validationResult(req);

  if (!error.isEmpty())
    return res
      .status(500)
      .json({ message: "Validation error", error: error.array()[0] });

  next();
};

export default handleValidation;
