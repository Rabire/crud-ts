import { Router } from "express";
import TodoController from "controller/todo";
import { validateToken } from "middleware/auth";
import handleValidation from "middleware/handleValidation";
import CommonValidator from "validator/common";
import TodoValidator from "validator/todo";
import catchHandler from "utils/catchError";

const router = Router();

/**
 * Get all records
 */
router.get(
  "/",
  CommonValidator.checkPagination(),
  validateToken,
  handleValidation,
  catchHandler(TodoController.getAll)
);

/**
 * Get a record by id
 */
router.get(
  "/:id",
  CommonValidator.checkIdParam(),
  handleValidation,
  catchHandler(TodoController.getById)
);

/**
 * Create a record from body
 */
router.post(
  "/",
  TodoValidator.checkCreateReq(),
  handleValidation,
  catchHandler(TodoController.create)
);

/**
 * Update a record by id
 */
router.put(
  "/:id",
  CommonValidator.checkIdParam(),
  handleValidation,
  catchHandler(TodoController.update)
);

/**
 * Soft delete a record by id
 */
router.delete(
  "/:id",
  CommonValidator.checkIdParam(),
  handleValidation,
  catchHandler(TodoController.delete)
);

export default router;
