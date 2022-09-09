import { Router } from "express";
import TodoController from "controller/todo";
import handleValidation from "middleware/handleValidation";
import checkValidation from "validator/pagination";
import TodoValidator from "validator/todo";
import catchHandler from "utils/catchError";

const router = Router();

router.get(
  "/",
  checkValidation(),
  handleValidation,
  catchHandler(TodoController.getAll)
);

router.post(
  "/",
  TodoValidator.checkCreateReq(),
  handleValidation,
  catchHandler(TodoController.create)
);

export default router;
