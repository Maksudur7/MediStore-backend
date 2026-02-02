import jwt from 'jsonwebtoken';
export const isAdminOrSeller = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (decoded.role !== "ADMIN" && decoded.role !== "SELLER") {
        return res.status(403).json({ message: "Access denied. Only for Admins or Seller" });
    }
    next();
};
//# sourceMappingURL=isAdminOrSeller.middleware.js.map