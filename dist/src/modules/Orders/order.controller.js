import { orderServices } from "./order.service";
const addToCard = async (req, res) => {
    try {
        const { medicineId, quantity } = req.body;
        const { userId } = req.user;
        if (!userId) {
            return res.status(401).json({ success: false, message: "User not authenticated!" });
        }
        const result = await orderServices.addToCart(userId, medicineId, quantity);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to post Medicin", details: error.message });
    }
};
const getAllOrders = async (req, res) => {
    try {
        const orders = await orderServices.getAllOrders();
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to fetch orders", details: error.message });
    }
};
const pleaseOrder = async (req, res) => {
    try {
        const { shippingAddress } = req.body;
        const { userId } = req.user;
        const result = await orderServices.pleaseOrder(shippingAddress, userId);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to post Medicin", details: error.message });
    }
};
const trackOrder = async (req, res) => {
    try {
        const { status } = req.body;
        const id = req.params.orderId;
        if (!id) {
            return res.status(400).json({ error: "Post ID is required" });
        }
        const result = await orderServices.trackOrder(id, status);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to post Medicin", details: error.message });
    }
};
const getAllOrdersBySellerId = async (req, res) => {
    try {
        const { userId } = req.user;
        const orders = await orderServices.getAllOrdersBySellerId(userId);
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to fetch orders", details: error.message });
    }
};
const getCartByUserId = async (req, res) => {
    try {
        const { userId } = req.user;
        const cart = await orderServices.getCartByUserId(userId);
        res.status(200).json(cart);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to fetch cart", details: error.message });
    }
};
const getMyOrders = async (req, res) => {
    try {
        const { userId } = req.user;
        const orders = await orderServices.getMyOrders(userId);
        res.status(200).json(orders);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to fetch orders", details: error.message });
    }
};
const getOrderDetails = async (req, res) => {
    try {
        const { id } = req.params;
        const { userId } = req.user;
        const order = await orderServices.getOrderDetails(id, userId);
        res.status(200).json(order);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to fetch order details", details: error.message });
    }
};
export const orderController = {
    addToCard,
    pleaseOrder,
    trackOrder,
    getAllOrdersBySellerId,
    getAllOrders,
    getCartByUserId,
    getMyOrders,
    getOrderDetails
};
//# sourceMappingURL=order.controller.js.map