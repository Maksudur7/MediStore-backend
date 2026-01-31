export declare const categoryService: {
    createCategory: (data: any) => Promise<{
        id: string;
        name: string;
    }>;
    updateCategory: (id: string, data: any) => Promise<{
        id: string;
        name: string;
    }>;
    deleteCategory: (id: string) => Promise<{
        id: string;
        name: string;
    }>;
    getAllCategories: () => Promise<{
        id: string;
        name: string;
    }[]>;
};
//# sourceMappingURL=category.service.d.ts.map