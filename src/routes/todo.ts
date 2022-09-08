import { Router } from "express";
import { getAll } from "controller/todo";

const router = Router();

router.get("/", getAll);

export default router;
