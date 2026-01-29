import { prisma } from "../lib/prisma";
import jwt from 'jsonwebtoken';

export const isPermitted = async (req: any, res: any, next: any) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token as string, process.env.JWT_SECRET as string);
        const userId = decoded.userId || decoded.id;
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (user?.status === false) {
            return res.status(403).json({ message: "You are banned from this platform!" });
        }
        next();
    } catch (error) {
        return res.status(401).json({ message: "Invalid or expired token!" });
    }
}