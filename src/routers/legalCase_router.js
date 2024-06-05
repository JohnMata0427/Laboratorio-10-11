import { Router } from "express";
import { createLegalCaseController , getAllLegalCaseController } from "../controllers/legalCase_controller.js";

const router = Router()

router.post('/legalcase', createLegalCaseController)
router.get('/legalcase', getAllLegalCaseController)

export default router