import { Router } from "express";
import { medicinController } from "./medicines.controller";

const router = Router()

// no gurd just public data 
router.get('/', medicinController.getAllMedicines)

// no gurd just public data
router.get('/:medicinId', medicinController.getMedicinById)



export const medicinesRouter: Router = router;