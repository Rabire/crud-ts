import { Router } from "express";
import UserController from "controller/user";
import catchHandler from "utils/catchError";

const router = Router();

router.get("/all", catchHandler(UserController.getAll));

router.get("/validate", catchHandler(UserController.validateToken));

router.post("/login", catchHandler(UserController.login));

router.post("/register", catchHandler(UserController.register));

export default router;
