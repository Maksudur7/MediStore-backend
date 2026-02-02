import { OrderStatus } from "../../../generated/prisma/enums";
export declare const orderServices: {
    pleaseOrder: (shippingAddress: string, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        status: OrderStatus;
        totalAmount: number;
        shippingAddress: string;
        customerId: string;
    }>;
    trackOrder: (orderId: string, newStatus: OrderStatus) => Promise<{
        id: string;
        createdAt: Date;
        status: OrderStatus;
        totalAmount: number;
        shippingAddress: string;
        customerId: string;
    }>;
    getAllOrdersBySellerId: (sellerId: string) => Promise<({
        items: ({
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
            medicineId: string;
            quantity: number;
            orderId: string;
            unitPrice: number;
        })[];
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
    } & {
        id: string;
        createdAt: Date;
        status: OrderStatus;
        totalAmount: number;
        shippingAddress: string;
        customerId: string;
    })[]>;
    getAllOrders: () => Promise<({
        items: ({
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
            medicineId: string;
            quantity: number;
            orderId: string;
            unitPrice: number;
        })[];
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
    } & {
        id: string;
        createdAt: Date;
        status: OrderStatus;
        totalAmount: number;
        shippingAddress: string;
        customerId: string;
    })[]>;
    getMyOrders: (userId: string) => Promise<({
        items: ({
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
            medicineId: string;
            quantity: number;
            orderId: string;
            unitPrice: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        status: OrderStatus;
        totalAmount: number;
        shippingAddress: string;
        customerId: string;
    })[]>;
    getOrderDetails: (orderId: string, userId: string) => Promise<({
        items: ({
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
            medicineId: string;
            quantity: number;
            orderId: string;
            unitPrice: number;
        })[];
    } & {
        id: string;
        createdAt: Date;
        status: OrderStatus;
        totalAmount: number;
        shippingAddress: string;
        customerId: string;
    }) | null>;
};
//# sourceMappingURL=order.service.d.ts.map