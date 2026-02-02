import { prisma } from "../../lib/prisma";

const createCategory = async (data: any) => {
    const result = await prisma.category.create({
        data: data
    });
    return result;
}

const updateCategory = async (id: string, data: any) => {
    const result = await prisma.category.update({
        where: { id },
        data: data
    });
    return result;
}

const deleteCategory = async (id: string) => {
    try {
        const result = await prisma.category.delete({
            where: { id: id }
        });
        return result;
    } catch (error: any) {
        if (error.code === 'P2025') {
            throw new Error("Category not found in database.");
        }
        if (error.code === 'P2003') {
            throw new Error("Cannot delete category. It is linked to existing medicines.");
        }
        throw error;
    }
}

const getAllCategories = async () => {
    const result = await prisma.category.findMany();
    return result;
}

export const categoryService = {
    createCategory,
    updateCategory,
    deleteCategory,
    getAllCategories
}