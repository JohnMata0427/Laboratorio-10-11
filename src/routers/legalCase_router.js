import { Router } from "express";
import { createLegalCaseController } from "../controllers/legalCase_controller.js";

const router = Router()

router.post('/legalcase', createLegalCaseController)

export default router