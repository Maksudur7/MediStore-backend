export const isAdminOrSeller = (req, res, next) => {
    if (req.user.role !== "ADMIN" || req.user.role !== "SELLER") {
        return res.status(403).json({ message: "Access denied. Only for Admins or Seller" });
    }
    next();
};
//# sourceMappingURL=isAdminOrSeller.middleware.js.map