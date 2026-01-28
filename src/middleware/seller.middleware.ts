export const isSeller = (req: any, res: any, next: any) => {
    if (req.user.role !== "SELLER") {
        return res.status(403).json({ message: "Access denied. Only for Sellers." });
    }
    next();
};