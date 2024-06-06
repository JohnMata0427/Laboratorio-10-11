import { Router } from "express";
import { createLegalCaseController , deleteLegalCaseController, getAllLegalCaseController, getLegalCaseByIDController, updateLegalCaseController } from "../controllers/legalCase_controller.js";

const router = Router()

router.post('/legalcase', createLegalCaseController)
router.get('/legalcase', getAllLegalCaseController)
router.put('/legalcase/:id', updateLegalCaseController)
router.delete('/legalcase/:id', deleteLegalCaseController)
router.get('/legalcase/:id',getLegalCaseByIDController)

export default router