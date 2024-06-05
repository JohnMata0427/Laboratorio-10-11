import { Router } from "express";
import { createLegalCaseController , getAllLegalCaseController, updateLegalCaseController } from "../controllers/legalCase_controller.js";

const router = Router()

router.post('/legalcase', createLegalCaseController)
router.get('/legalcase', getAllLegalCaseController)
router.put('/legalcase/:id', updateLegalCaseController)

export default router