import { Router } from "express";
import { categoryController } from "./category.controller";
import { isAdmin } from "../../middleware/isAdmin.middleware";

const router = Router()

router.post('/', isAdmin, categoryController.createCategory)
router.patch('/:categoryId', isAdmin, categoryController.updateCategory)
router.delete('/', isAdmin, categoryController.deleteCategory)

export const categoryRouter: Router = router;