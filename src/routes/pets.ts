import { Router } from "express";
import handleValidation from "middleware/handleValidation";
import validateToken from "middleware/validateToken";
import catchHandler from "utils/catchError";
import { checkIdParam, checkPagination, checkToken } from "validator/common";
import getAll from "controller/pets/getAll";
import getById from "controller/pets/getById";
import update from "controller/pets/update";
import create from "controller/pets/update";
import deletePet from "controller/pets/delete";

const router = Router();

router.get(
  "/",
  checkPagination(),
  checkToken(),
  handleValidation,

  validateToken,
  catchHandler(getAll)
);

router.get(
  "/:id",
  checkIdParam(),
  checkToken(),
  handleValidation,
  validateToken,

  catchHandler(getById)
);

router.post(
  "/",
  // checkCreate(), // TODO:
  checkToken(),
  handleValidation,
  validateToken,

  catchHandler(create)
);

router.put(
  "/:id",
  checkIdParam(),
  // checkUpdate(), // TODO:
  checkToken(),
  handleValidation,
  validateToken,

  catchHandler(update)
);

router.delete(
  "/:id",
  checkIdParam(),
  checkToken(),
  handleValidation,
  validateToken,

  catchHandler(deletePet)
);

export default router;
