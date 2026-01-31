import { OrderStatus } from "../../../generated/prisma/enums";
export declare const orderServices: {
    addToCart: (userId: string, medicineId: string, quantity: number) => Promise<{
        id: string;
        createdAt: Date;
        updatedAt: Date;
        userId: string;
        medicineId: string;
        quantity: number;
    }>;
    pleaseOrder: (shippingAddress: string, userId: string) => Promise<{
        id: string;
        createdAt: Date;
        status: OrderStatus;
        customerId: string;
        totalAmount: number;
        shippingAddress: string;
    }>;
    trackOrder: (orderId: string, newStatus: OrderStatus) => Promise<{
        id: string;
        createdAt: Date;
        status: OrderStatus;
        customerId: string;
        totalAmount: number;
        shippingAddress: string;
    }>;
    getAllOrdersBySellerId: (sellerId: string) => Promise<({
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
            unitPrice: number;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        status: OrderStatus;
        customerId: string;
        totalAmount: number;
        shippingAddress: string;
    })[]>;
    getAllOrders: () => Promise<({
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
            unitPrice: number;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        status: OrderStatus;
        customerId: string;
        totalAmount: number;
        shippingAddress: string;
    })[]>;
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
            unitPrice: number;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        status: OrderStatus;
        customerId: string;
        totalAmount: number;
        shippingAddress: string;
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
            unitPrice: number;
            orderId: string;
        })[];
    } & {
        id: string;
        createdAt: Date;
        status: OrderStatus;
        customerId: string;
        totalAmount: number;
        shippingAddress: string;
    }) | null>;
};
//# sourceMappingURL=order.service.d.ts.map