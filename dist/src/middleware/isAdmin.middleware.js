export const isAdmin = (req, res, next) => {
    if (req.user.role !== "ADMIN") {
        return res.status(403).json({ message: "Access denied. Only for Admins." });
    }
    next();
};
//# sourceMappingURL=isAdmin.middleware.js.map