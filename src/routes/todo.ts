import { Router } from "express";
import TodoController from "controller/todo";
import handleValidation from "middleware/handleValidation";
import CommonValidator from "validator/common";
import TodoValidator from "validator/todo";
import catchHandler from "utils/catchError";

const router = Router();

router.get(
  "/",
  CommonValidator.checkPagination(),
  handleValidation,
  catchHandler(TodoController.getAll)
);

router.get(
  "/:id",
  CommonValidator.checkIdParam(),
  handleValidation,
  catchHandler(TodoController.getById)
);

router.post(
  "/",
  TodoValidator.checkCreateReq(),
  handleValidation,
  catchHandler(TodoController.create)
);

export default router;
