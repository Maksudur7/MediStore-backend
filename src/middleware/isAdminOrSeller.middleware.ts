import jwt, { JwtPayload } from 'jsonwebtoken';

export const isAdminOrSeller = (req: any, res: any, next: any) => {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    const token = authHeader.split(" ")[1];
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    if (decoded.role !== "ADMIN" && decoded.role !== "SELLER") {
        return res.status(403).json({ message: "Access denied. Only for Admins or Seller" });
    }
    next();
};