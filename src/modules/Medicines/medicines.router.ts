import { Router } from "express";
import { medicinController } from "./medicines.controller";

const router = Router()

router.get('/', medicinController.getAllMedicines)

export const medicinesRouter: Router = router;