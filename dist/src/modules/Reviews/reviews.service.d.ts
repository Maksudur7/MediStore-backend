export declare const reviewServices: {
    postReview: (userId: string, medicineId: string, rating: number, comment: string) => Promise<{
        id: string;
        createdAt: Date;
        customerId: string;
        rating: number;
        comment: string | null;
        medicineId: string;
    }>;
    getAllReviews: () => Promise<({
        customer: {
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
        customerId: string;
        rating: number;
        comment: string | null;
        medicineId: string;
    })[]>;
};
//# sourceMappingURL=reviews.service.d.ts.map