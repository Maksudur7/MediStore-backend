import { Request, Response } from "express"
import { orderServices } from "./order.service";

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

const getAllOrders = async (req: Request, res: Response) => {
    try {
        const orders = await orderServices.getAllOrders();
        res.status(200).json(orders);
    }
    catch (error: any) {
        res.status(400).json({ error: "Failed to fetch orders", details: error.message });
    }
}

const pleaseOrder = async (req: Request, res: Response) => {
    try {
        const { shippingAddress } = req.body
        const { userId } = req.user;
        const result = await orderServices.pleaseOrder(shippingAddress, userId)
        res.status(200).json(result);

    } catch (error: any) {
        res.status(400).json({ error: "Failed to post Medicin", details: error.message });
    }
}

const trackOrder = async (req: Request, res: Response) => {
    try {
        const { status } = req.body
        const id = req.params.orderId;
        if (!id) {
            return res.status(400).json({ error: "Post ID is required" });
        }
        const result = await orderServices.trackOrder(id as string, status)
        res.status(200).json(result);

    } catch (error: any) {
        res.status(400).json({ error: "Failed to post Medicin", details: error.message });
    }
}

const getAllOrdersBySellerId = async (req: Request, res: Response) => {
    try {
        const { sellerId } = req.params;
        const orders = await orderServices.getAllOrdersBySellerId(sellerId as string);
        res.status(200).json(orders);
    } catch (error: any) {
        res.status(400).json({ error: "Failed to fetch orders", details: error.message });
    }
}

const getCartByUserId = async (req: Request, res: Response) => {
    try {
        const { userId } = req.params;
        const cart = await orderServices.getCartByUserId(userId as string);
        res.status(200).json(cart);
    } catch (error: any) {
        res.status(400).json({ error: "Failed to fetch cart", details: error.message });
    }
}

export const orderController = {
    addToCard,
    pleaseOrder,
    trackOrder,
    getAllOrdersBySellerId,
    getAllOrders,
    getCartByUserId
}