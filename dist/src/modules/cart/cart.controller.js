import { orderServices } from "./cart.service";
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
const updateOrder = async (req, res) => {
    try {
        const { id, newQty } = req.params;
        const cart = await orderServices.updateOrder(id, Number(newQty));
        res.status(200).json(cart);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to update cart", details: error.message });
    }
};
const deletOrder = async (req, res) => {
    try {
        const { orderId } = req.params;
        const result = await orderServices.deletOrder(orderId);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to delete order", details: error.message });
    }
};
export const orderController = {
    addToCard,
    getCartByUserId,
    updateOrder,
    deletOrder
};
//# sourceMappingURL=cart.controller.js.map