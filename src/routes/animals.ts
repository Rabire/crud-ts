import { Router } from "express";
import handleValidation from "middleware/handleValidation";
import validateToken from "middleware/validateToken";
import catchHandler from "utils/catchError";
import { checkIdParam, checkPagination, checkToken } from "validator/common";
import getAll from "controller/pets/getAll";
import getById from "controller/pets/getById";

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

export default router;
