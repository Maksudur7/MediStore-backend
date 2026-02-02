import { Prisma } from "../../../generated/prisma/client";
import { Role } from "../../../generated/prisma/enums";
export declare const userService: {
    getAllUsers: () => Promise<{
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: Role;
        phone: string | null;
        status: boolean;
    }[]>;
    updateUser: (userId: string, data: {
        name?: string;
        email?: string;
        image?: string;
        phone?: string;
    }) => Promise<{
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: Role;
        phone: string | null;
        status: boolean;
    }>;
    updateUserByAdmin: (userId: string, data: {
        role?: string;
        status?: boolean;
    }) => Promise<{
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: Role;
        phone: string | null;
        status: boolean;
    }>;
    deleteUserByAdmin: (userId: string) => Promise<{
        id: string;
        name: string;
        email: string;
        emailVerified: boolean;
        image: string | null;
        createdAt: Date;
        updatedAt: Date;
        role: Role;
        phone: string | null;
        status: boolean;
    }>;
    getAdminStats: () => Promise<{
        totalUsers: number;
        totalMedicines: number;
        totalOrders: number;
        totalRevenue: number;
        recentOrders: never[];
    }>;
    getSellerStats: (userId: string) => Promise<{
        totalSales: Prisma.GetOrderAggregateType<{
            where: {
                items: {
                    some: {
                        medicine: {
                            sellerId: string;
                        };
                    };
                };
            };
            _sum: {
                totalAmount: true;
            };
        }>;
        totalMedicines: number;
        newOrders: number;
        profitRate: number;
        recentOrders: {
            id: string;
            createdAt: Date;
            status: import("../../../generated/prisma/enums").OrderStatus;
            totalAmount: number;
            shippingAddress: string;
            customerId: string;
        }[];
        totalRevenue: number;
    }>;
};
//# sourceMappingURL=user.service.d.ts.map