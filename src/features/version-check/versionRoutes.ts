import { Router } from "express";
import { checkVersion } from "./versionController";

const router = Router();

router.get("/check", checkVersion);

export default router;
