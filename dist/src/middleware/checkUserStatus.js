import { prisma } from "../lib/prisma";
import jwt from 'jsonwebtoken';
export const isPermitted = async (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (!authHeader || !authHeader.startsWith("Bearer ")) {
            return res.status(401).json({ message: "Unauthorized" });
        }
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const userId = decoded?.userId || decoded?.id;
        const user = await prisma.user.findUnique({ where: { id: userId } });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if (user?.status === false) {
            return res.status(403).json({ message: "You are banned from this platform!" });
        }
        req.user = user;
        next();
    }
    catch (error) {
        return res.status(401).json({ message: "Invalid or expired token!" });
    }
};
//# sourceMappingURL=checkUserStatus.js.map