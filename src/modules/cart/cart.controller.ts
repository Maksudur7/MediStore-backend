import { Request, Response } from "express"
import { orderServices } from "./cart.service";

const addToCard = async (req: Request, res: Response) => {
    try {
        const { medicineId, quantity } = req.body;
        const { userId } = req.user;
        if (!userId) {
            return res.status(401).json({ success: false, message: "User not authenticated!" });
        }
        const result = await orderServices.addToCart(userId, medicineId, quantity)
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({ error: "Failed to post Medicin", details: error.message });
    }
}

const getCartByUserId = async (req: Request, res: Response) => {
    try {
        const { userId } = (req as any).user;
        const cart = await orderServices.getCartByUserId(userId as string);
        res.status(200).json(cart);
    } catch (error: any) {
        res.status(400).json({ error: "Failed to fetch cart", details: error.message });
    }
}

const updateOrder = async (req: Request, res: Response) => {
    try {
        const { id, newQty } = req.params;
        const cart = await orderServices.updateOrder(id as string, Number(newQty));
        res.status(200).json(cart);
    } catch (error: any) {
        res.status(400).json({ error: "Failed to update cart", details: error.message });
    }
}

const deletOrder = async (req: Request, res: Response) => {
    try {
        const { orderId } = req.params;
        const result = await orderServices.deletOrder(orderId as string);
        res.status(200).json(result);
    }
    catch (error: any) {
        res.status(400).json({ error: "Failed to delete order", details: error.message });
    }
}


export const orderController = {
    addToCard,
    getCartByUserId,
    updateOrder,
    deletOrder
}