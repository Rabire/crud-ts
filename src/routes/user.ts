import { Router } from "express";
import UserController from "controller/user";
import catchHandler from "utils/catchError";
import { validateToken } from "middleware/auth";
import handleValidation from "middleware/handleValidation";
import CommonValidator from "validator/common";

const router = Router();

router.get(
  "/",
  CommonValidator.checkToken(),
  handleValidation,
  validateToken,

  catchHandler(UserController.getAll)
);

router.post(
  "/register",
  // TODO: validator email, password
  handleValidation,

  catchHandler(UserController.register)
);

router.post(
  "/login",
  // TODO: validator email, password
  handleValidation,

  catchHandler(UserController.login)
);

router.post(
  "/logout",
  CommonValidator.checkToken(),
  handleValidation,

  catchHandler(UserController.logout)
);

router.post(
  "/refreshToken",
  // TODO: validator refreshToken
  handleValidation,

  catchHandler(UserController.logout)
);

export default router;
