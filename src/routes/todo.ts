import { Router } from "express";
import TodoController from "controller/todo";
import handleValidation from "middleware/handleValidation";
import TodoValidator from "validator/todo";

const router = Router();

router.get("/", TodoController.getAll);
router.post(
  "/",
  TodoValidator.checkCreateReq,
  handleValidation,
  TodoController.create
);

export default router;
