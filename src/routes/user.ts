import { Router } from "express";
import UserController from "controller/user";
import catchHandler from "utils/catchError";

const router = Router();

router.get("/", catchHandler(UserController.getAll));

router.post("/register", catchHandler(UserController.register));

router.post("/login", catchHandler(UserController.login));

export default router;
