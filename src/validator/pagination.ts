import { query } from "express-validator";

const checkValidation = () => [
  query("limit")
    .notEmpty()
    .withMessage("The value should not be empty")
    .isInt({ min: 1, max: 30 })
    .withMessage("The value should be a number between 1-30"),
  query("offset")
    .optional()
    .isInt({ min: 0 })
    .withMessage("The value should be 0 or a higher number"),
];

export default checkValidation;
