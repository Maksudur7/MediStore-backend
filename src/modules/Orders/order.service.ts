import { OrderStatus } from "../../../generated/prisma/enums";
import { prisma } from "../../lib/prisma"


const addToCart = async (userId: string, medicineId: string, quantity: number) => {
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

export const orderServices = {
    addToCart,
    pleaseOrder,
    trackOrder
}