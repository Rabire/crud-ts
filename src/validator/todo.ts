import { body } from "express-validator";

const checkIsCompleted = body("isCompleted")
  .optional()
  .isBoolean()
  .withMessage("The value should be boolean")
  .isIn([0, false])
  .withMessage("The value should be 0 or false");

export const checkCreate = () => [
  body("title")
    .notEmpty()
    .withMessage("The value should not be empty")
    .isString()
    .withMessage("The value should be a string"),

  checkIsCompleted,
];

export const checkUpdate = () => [
  body("title")
    .optional()
    .isString()
    .withMessage("The value should be a string"),

  checkIsCompleted,
];
