export declare const medicinesService: {
    getAllMedicines: (query: any) => Promise<({
        category: {
            id: string;
            name: string;
        };
        seller: {
            name: string;
            email: string;
        };
    } & {
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
    })[]>;
    getMedicinById: (id: string) => Promise<{
        reviews: {
            id: string;
            createdAt: Date;
            customerId: string;
            rating: number;
            comment: string | null;
            medicineId: string;
        }[];
        category: {
            id: string;
            name: string;
        };
        orderItems: {
            id: string;
            medicineId: string;
            quantity: number;
            orderId: string;
            unitPrice: number;
        }[];
        seller: {
            id: string;
            name: string;
            email: string;
            emailVerified: boolean;
            image: string | null;
            createdAt: Date;
            updatedAt: Date;
            role: import("../../../generated/prisma/enums").Role;
            phone: string | null;
            status: boolean;
        };
    } & {
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
    }>;
    createMedicine: (medicineData: any) => Promise<{
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
    }>;
    updateMedicine: (id: string, medicineData: any) => Promise<{
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
    }>;
    deleteMedicine: (id: string) => Promise<{
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
    }>;
};
//# sourceMappingURL=medicines.service.d.ts.map