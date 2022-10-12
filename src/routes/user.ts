import { Router } from "express";

import getAll from "controller/user/getAll";
import login from "controller/user/login";
import logout from "controller/user/logout";
import refreshToken from "controller/user/refreshToken";
import register from "controller/user/register";

import validateToken from "middleware/validateToken";
import handleValidation from "middleware/handleValidation";

import CommonValidator from "validator/common";
import UserValidator from "validator/user";
import catchHandler from "utils/catchError";

const router = Router();

router.get(
  "/",
  CommonValidator.checkToken(),
  handleValidation,
  validateToken,

  catchHandler(getAll)
);

router.post(
  "/register",
  UserValidator.checkRegister(),
  handleValidation,

  catchHandler(register)
);

router.post(
  "/login",
  UserValidator.checkLogin(),
  handleValidation,

  catchHandler(login)
);

router.post(
  "/logout",
  CommonValidator.checkToken(),
  handleValidation,

  catchHandler(logout)
);

router.post(
  "/refreshToken",
  UserValidator.checkRefreshToken(),
  handleValidation,

  catchHandler(refreshToken)
);

export default router;
