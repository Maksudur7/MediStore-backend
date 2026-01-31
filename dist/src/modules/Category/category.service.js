import { prisma } from "../../lib/prisma";
const createCategory = async (data) => {
    const result = await prisma.category.create({
        data: data
    });
    return result;
};
const updateCategory = async (id, data) => {
    const result = await prisma.category.update({
        where: { id },
        data: data
    });
    return result;
};
const deleteCategory = async (id) => {
    const result = await prisma.category.delete({
        where: { id }
    });
    return result;
};
const getAllCategories = async () => {
    const result = await prisma.category.findMany();
    return result;
};
export const categoryService = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategories
};
//# sourceMappingURL=category.service.js.map