export declare const reviewServices: {
    postReview: (userId: string, medicineId: string, rating: number, comment: string) => Promise<{
        id: string;
        createdAt: Date;
        rating: number;
        comment: string | null;
        customerId: string;
        medicineId: string;
    }>;
};
//# sourceMappingURL=reviews.service.d.ts.map