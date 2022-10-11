import { Router } from "express";
import UserController from "controller/user";
import catchHandler from "utils/catchError";
import { validateToken } from "middleware/auth";
import handleValidation from "middleware/handleValidation";
import CommonValidator from "validator/common";
import UserValidator from "validator/user";

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
  UserValidator.checkRegister(),
  handleValidation,

  catchHandler(UserController.register)
);

router.post(
  "/login",
  UserValidator.checkLogin(),
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
  UserValidator.checkRefreshToken(),
  handleValidation,

  catchHandler(UserController.refreshToken)
);

export default router;
