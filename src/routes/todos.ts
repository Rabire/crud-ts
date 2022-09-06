import { Router } from "express";
import { getAll } from "controller/totos";

const router = Router();

router.get("/", getAll);

export default router;
