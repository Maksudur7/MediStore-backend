export const isAdminOrSeller = (req: any, res: any, next: any) => {
    if (req.user.role !== "ADMIN" || req.user.role !== "SELLER") {
        return res.status(403).json({ message: "Access denied. Only for Admins or Seller" });
    }
    next();
};