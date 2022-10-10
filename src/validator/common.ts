import { header, param, query } from "express-validator";
import { Router } from "express";
import handleValidation from "middleware/handleValidation";

class CommonValidator {
  checkIdParam = () => [
    param("id")
      .notEmpty()
      .withMessage("The value should not be empty")
      .isUUID(4)
      .withMessage("The value should be uuid v4"),
  ];

  checkPagination = () => [
    query("limit")
      .optional()
      .isInt({ min: 1, max: 30 })
      .withMessage("The value should be a number between 1-30"),
    query("offset")
      .optional()
      .isInt({ min: 0 })
      .withMessage("The value should be 0 or a higher number"),
  ];

  checkToken = () => [
    header("token").notEmpty().withMessage("The value should not be empty"),
  ];

  router = Router().use(handleValidation);
}

export default new CommonValidator();
