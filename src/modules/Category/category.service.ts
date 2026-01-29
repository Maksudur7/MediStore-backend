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
    const result = await prisma.category.delete({
        where: { id }
    });
    return result;
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