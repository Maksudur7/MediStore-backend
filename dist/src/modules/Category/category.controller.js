import { categoryService } from "./category.service";
const createCategory = async (req, res) => {
    try {
        const result = await categoryService.createCategory(req.body);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to fetch orders", details: error.message });
    }
};
const updateCategory = async (req, res) => {
    try {
        const result = await categoryService.updateCategory(req.params.categoryId, req.body);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to update category", details: error.message });
    }
};
const deleteCategory = async (req, res) => {
    try {
        const result = await categoryService.deleteCategory(req.params.id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to delete category", details: error.message });
    }
};
const getAllCategories = async (req, res) => {
    try {
        const result = await categoryService.getAllCategories();
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to fetch categories", details: error.message });
    }
};
export const categoryController = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategories
};
//# sourceMappingURL=category.controller.js.map