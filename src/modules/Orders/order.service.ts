import { OrderStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma"

const getAllOrders = async () => {
    const orders = await prisma.order.findMany({
        include: {
            items: {
                include: {
                    medicine: true
                }
            },
            customer: true
        },
        orderBy: { createdAt: 'desc' }
    });
    return orders;
}

const pleaseOrder = async (shippingAddress: string, userId: string) => {

    const cartItems = await prisma.cartItem.findMany({
        where: {
            userId
        },
        include: {
            medicine: true
        }
    })

    if (cartItems.length === 0) {
        throw new Error("You have no items")
    }

    const totalAmmount = cartItems.reduce((sum: any, item: any) => sum + (item.quantity * item.medicine.price), 0);

    return await prisma.$transaction(async (tx) => {
        const order = await tx.order.create({
            data: {
                customerId: userId,
                totalAmount: totalAmmount,
                shippingAddress,
                status: "PLACED",
                items: {
                    create: cartItems.map((item: any) => ({
                        medicineId: item.medicineId,
                        quantity: item.quantity,
                        unitPrice: item.medicine.price
                    }))
                }
            }
        })

        for (const item of cartItems) {
            if (item.medicine.stockQuantity < item.quantity) {
                throw new Error(`Only ${item.medicine.stockQuantity} items left in stock for ${item.medicine.name}!`);
            }
            await tx.medicine.update({
                where: { id: item.medicineId },
                data: {
                    stockQuantity: {
                        decrement: item.quantity
                    }
                }
            });
        }

        await tx.cartItem.deleteMany({
            where: { userId }
        })

        return order;
    })
}

const trackOrder = async (orderId: string, newStatus: OrderStatus) => {
    const result = await prisma.order.update({
        where: {
            id: orderId
        },
        data: {
            status: newStatus
        }
    })
    return result
}

const getAllOrdersBySellerId = async (sellerId: string) => {
    const orders = await prisma.order.findMany({
        where: {
            items: {
                some: {
                    medicine: {
                        sellerId: sellerId
                    }
                }
            }
        },
        include: {
            items: {
                include: {
                    medicine: true
                }
            },
            customer: true
        },
        orderBy: { createdAt: 'desc' }
    });
    return orders;
}


const getMyOrders = async (userId: string) => {
    const res = await prisma.order.findMany({
        where: { customerId: userId },
        include: {
            items: { include: { medicine: true } }
        },
        orderBy: { createdAt: 'desc' }
    });
    return res;
};


const getOrderDetails = async (orderId: string, userId: string) => {
    return await prisma.order.findFirst({
        where: {
            id: orderId,
            customerId: userId
        },
        include: {
            items: { include: { medicine: true } }
        }
    });
};

export const orderServices = {
    pleaseOrder,
    trackOrder,
    getAllOrdersBySellerId,
    getAllOrders,
    getMyOrders,
    getOrderDetails
}