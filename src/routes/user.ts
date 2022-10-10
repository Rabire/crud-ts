import { Router } from "express";
import UserController from "controller/user";
import catchHandler from "utils/catchError";
import { validateToken } from "middleware/auth";

const router = Router();

router.get("/", catchHandler(UserController.getAll));

router.post("/register", catchHandler(UserController.register));

router.post("/login", catchHandler(UserController.login));

router.post("/logout", validateToken, catchHandler(UserController.logout));

export default router;
