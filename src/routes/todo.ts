import { Router } from "express";
import { create, getAll } from "controller/todo";
import { handleValidationError, todoValidator } from "validator";

const router = Router();

router.get("/", getAll);
router.post("/", todoValidator.checkCreateReq, handleValidationError, create);

export default router;
