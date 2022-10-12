import { Router } from "express";

import getAll from "controller/user/getAll";
import login from "controller/user/login";
import logout from "controller/user/logout";
import refreshToken from "controller/user/refreshToken";
import register from "controller/user/register";

import validateToken from "middleware/validateToken";
import handleValidation from "middleware/handleValidation";

import { checkToken } from "validator/common";
import { checkLogin, checkRefreshToken, checkRegister } from "validator/user";
import catchHandler from "utils/catchError";

const router = Router();

router.get(
  "/",
  checkToken(),
  handleValidation,
  validateToken,

  catchHandler(getAll)
);

router.post(
  "/register",
  checkRegister(),
  handleValidation,

  catchHandler(register)
);

router.post(
  "/login",
  checkLogin(),
  handleValidation,

  catchHandler(login)
);

router.post(
  "/logout",
  checkToken(),
  handleValidation,

  catchHandler(logout)
);

router.post(
  "/refreshToken",
  checkRefreshToken(),
  handleValidation,

  catchHandler(refreshToken)
);

export default router;
