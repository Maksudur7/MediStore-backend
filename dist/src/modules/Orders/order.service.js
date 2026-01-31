import { prisma } from "../../lib/prisma";
const addToCart = async (userId, medicineId, quantity) => {
    console.log(userId, medicineId, quantity);
    const medicine = await prisma.medicine.findUnique({
        where: { id: medicineId }
    });
    if (!medicine) {
        throw new Error("Medicine not found!");
    }
    if (medicine.stockQuantity < quantity) {
        throw new Error(`Only ${medicine.stockQuantity} items left in stock!`);
    }
    const existingCartItem = await prisma.cartItem.findUnique({
        where: {
            userId_medicineId: {
                userId: userId,
                medicineId: medicineId
            }
        }
    });
    if (existingCartItem) {
        return await prisma.cartItem.update({
            where: { id: existingCartItem.id },
            data: {
                quantity: existingCartItem.quantity + quantity
            }
        });
    }
    return await prisma.cartItem.create({
        data: {
            userId,
            medicineId,
            quantity
        }
    });
};
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
};
const pleaseOrder = async (shippingAddress, userId) => {
    const cartItems = await prisma.cartItem.findMany({
        where: {
            userId
        },
        include: {
            medicine: true
        }
    });
    if (cartItems.length === 0) {
        throw new Error("You have no items");
    }
    const totalAmmount = cartItems.reduce((sum, item) => sum + (item.quantity * item.medicine.price), 0);
    return await prisma.$transaction(async (tx) => {
        const order = await tx.order.create({
            data: {
                customerId: userId,
                totalAmount: totalAmmount,
                shippingAddress,
                status: "PLACED",
                items: {
                    create: cartItems.map((item) => ({
                        medicineId: item.medicineId,
                        quantity: item.quantity,
                        unitPrice: item.medicine.price
                    }))
                }
            }
        });
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
        });
        return order;
    });
};
const trackOrder = async (orderId, newStatus) => {
    const result = await prisma.order.update({
        where: {
            id: orderId
        },
        data: {
            status: newStatus
        }
    });
    return result;
};
const getAllOrdersBySellerId = async (sellerId) => {
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
};
const getCartByUserId = async (userId) => {
    const cartItems = await prisma.cartItem.findMany({
        where: { userId },
        include: {
            medicine: true
        }
    });
    return cartItems;
};
const getMyOrders = async (userId) => {
    return await prisma.order.findMany({
        where: { customerId: userId },
        include: {
            items: { include: { medicine: true } }
        },
        orderBy: { createdAt: 'desc' }
    });
};
const getOrderDetails = async (orderId, userId) => {
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
    addToCart,
    pleaseOrder,
    trackOrder,
    getAllOrdersBySellerId,
    getAllOrders,
    getCartByUserId,
    getMyOrders,
    getOrderDetails
};
//# sourceMappingURL=order.service.js.map