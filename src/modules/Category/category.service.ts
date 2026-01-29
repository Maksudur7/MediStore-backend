

const createCategory = async (data: any) => {
    // Logic to create a category
    return "Category created";
}

const updateCategory = async (id: string, data: any) => {
    // Logic to update a category
    return "Category updated";
}

const deleteCategory = async (id: string) => {
    // Logic to delete a category
    return "Category deleted";
}

export const categoryService = {
    createCategory,
    updateCategory,
    deleteCategory
}