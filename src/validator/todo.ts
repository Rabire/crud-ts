import { body } from "express-validator";

class TodoValidator {
  checkCreateReq = () => [
    body("title").notEmpty().withMessage("The value sould not be empty"),
    body("isCompleted")
      .optional()
      .isBoolean()
      .withMessage("The value should be boolean")
      .isIn([0, false])
      .withMessage("The value should be 0 or false"),
  ];
}

export default new TodoValidator();
