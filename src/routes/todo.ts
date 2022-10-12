import { Router } from "express";
import TodoController from "controller/todo";
import validateToken from "middleware/validateToken";
import handleValidation from "middleware/handleValidation";
import { checkPagination, checkToken, checkIdParam } from "validator/common";
import { checkCreate, checkUpdate } from "validator/todo";
import catchHandler from "utils/catchError";

const router = Router();

/**
 * Get all records
 */
router.get(
  "/",
  checkPagination(),
  checkToken(),
  handleValidation,

  validateToken,
  catchHandler(TodoController.getAll)
);

/**
 * Get a record by id
 */
router.get(
  "/:id",
  checkIdParam(),
  checkToken(),
  handleValidation,
  validateToken,

  catchHandler(TodoController.getById)
);

/**
 * Create a record from body
 */
router.post(
  "/",
  checkCreate(),
  checkToken(),
  handleValidation,
  validateToken,

  catchHandler(TodoController.create)
);

/**
 * Update a record by id
 */
router.put(
  "/:id",
  checkIdParam(),
  checkUpdate(),
  checkToken(),
  handleValidation,
  validateToken,

  catchHandler(TodoController.update)
);

/**
 * Soft delete a record by id
 */
router.delete(
  "/:id",
  checkIdParam(),
  checkToken(),
  handleValidation,
  validateToken,

  catchHandler(TodoController.delete)
);

export default router;
