import { Router } from "express";
import { create, getAll } from "controller/todo";

const router = Router();

router.get("/", getAll);
router.post("/", create);

export default router;
