import { Router } from "express";
import { medicinController } from "./medicines.controller";
import { isSeller } from "../../middleware/seller.middleware";
import { isPermitted } from "../../middleware/checkUserStatus";

const router = Router()

// no gurd just public data 
router.get('/', medicinController.getAllMedicines)

// no gurd just public data
router.get('/:medicinId', medicinController.getMedicinById)

router.post('/', isPermitted, isSeller, medicinController.createMedicine)

router.put('/:medicinId', isPermitted, isSeller, medicinController.updateMedicine)

router.delete('/:medicinId', isPermitted, isSeller, medicinController.deleteMedicine)

export const medicinesRouter: Router = router;