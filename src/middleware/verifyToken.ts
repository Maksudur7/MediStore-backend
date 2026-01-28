import jwt from 'jsonwebtoken';

export const verifyToken = (req: any, res: any, next: any) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Token missing!"
        })
    }
    try {
        const decoded = jwt.verify(token as string, process.env.JWT_SECRET as string);
        req.user = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ success: false, message: "Invalid or expired token!" });
    }

};