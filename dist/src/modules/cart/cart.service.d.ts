export declare const orderServices: {
    addToCart: (userId: string, medicineId: string, quantity: number) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        medicineId: string;
        quantity: number;
    }>;
    getCartByUserId: (userId: string) => Promise<({
        medicine: {
            id: string;
            name: string;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
            description: string;
            price: number;
            manufacturer: string;
            stockQuantity: number;
            categoryId: string;
            sellerId: string;
        };
    } & {
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        medicineId: string;
        quantity: number;
    })[]>;
    updateOrder: (id: string, newQty: number) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        medicineId: string;
        quantity: number;
    }>;
    deletOrder: (orderId: string) => Promise<{
        success: boolean;
        message: string;
    }>;
};
//# sourceMappingURL=cart.service.d.ts.map