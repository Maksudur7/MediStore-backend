import { Router } from "express";
import { medicinController } from "./medicines.controller";
import { isSeller } from "../../middleware/seller.middleware";

const router = Router()

// no gurd just public data 
router.get('/', medicinController.getAllMedicines)

// no gurd just public data
router.get('/:medicinId', medicinController.getMedicinById)

router.post('/', isSeller, medicinController.createMedicine)

router.patch('/:medicinId', isSeller, medicinController.updateMedicine)

router.delete('/:medicinId', isSeller, medicinController.deleteMedicine)

export const medicinesRouter: Router = router;