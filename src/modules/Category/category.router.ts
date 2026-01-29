import { Router } from "express";
import { categoryController } from "./category.controller";

const router = Router()

router.post('/', categoryController.createCategory)
router.patch('/', categoryController.updateCategory)
router.delete('/', categoryController.deleteCategory)

export const categoryRouter: Router = router;