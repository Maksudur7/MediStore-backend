import { Request, Response } from "express"
import { orderServices } from "./order.service";

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
        const { userId } = (req as any).user;
        const orders = await orderServices.getAllOrdersBySellerId(userId as string);
        res.status(200).json(orders);
    } catch (error: any) {
        res.status(400).json({ error: "Failed to fetch orders", details: error.message });
    }
}

const getMyOrders = async (req: Request, res: Response) => {
    try {
        const { userId } = (req as any).user;
        const orders = await orderServices.getMyOrders(userId as string);
        res.status(200).json(orders);
    }
    catch (error: any) {
        res.status(400).json({ error: "Failed to fetch orders", details: error.message });
    }
}

const getOrderDetails = async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { userId } = (req as any).user;
        const order = await orderServices.getOrderDetails(id as string, userId as string);
        res.status(200).json(order);
    }
    catch (error: any) {
        res.status(400).json({ error: "Failed to fetch order details", details: error.message });
    }
}

export const orderController = {
    pleaseOrder,
    trackOrder,
    getAllOrdersBySellerId,
    getAllOrders,
    getMyOrders,
    getOrderDetails
}