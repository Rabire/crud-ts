import { Router } from "express";
import handleValidation from "middleware/handleValidation";
import validateToken from "middleware/validateToken";
import catchHandler from "utils/catchError";
import { checkPagination, checkToken } from "validator/common";
import getAll from "controller/pets/getAll";

const router = Router();

router.get(
  "/",
  checkPagination(),
  checkToken(),
  handleValidation,

  validateToken,
  catchHandler(getAll)
);

export default router;
