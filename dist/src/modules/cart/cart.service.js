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
const getCartByUserId = async (userId) => {
    const cartItems = await prisma.cartItem.findMany({
        where: { userId },
        include: {
            medicine: true
        }
    });
    return cartItems;
};
const updateOrder = async (id, newQty) => {
    const updatedCartItem = await prisma.cartItem.update({
        where: { id },
        data: { quantity: newQty }
    });
    return updatedCartItem;
};
const deletOrder = async (orderId) => {
    await prisma.order.delete({
        where: { id: orderId }
    });
    return { success: true, message: "Order deleted successfully." };
};
export const orderServices = {
    addToCart,
    getCartByUserId,
    updateOrder,
    deletOrder
};
//# sourceMappingURL=cart.service.js.map