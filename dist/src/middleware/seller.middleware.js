export const isSeller = (req, res, next) => {
    if (req.user.role !== "SELLER") {
        return res.status(403).json({ message: "Access denied. Only for Sellers." });
    }
    next();
};
//# sourceMappingURL=seller.middleware.js.map