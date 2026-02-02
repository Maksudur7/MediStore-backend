import { Request, Response } from "express";
export declare const userController: {
    getAllUsers: (req: Request, res: Response) => Promise<void>;
    updateUser: (req: Request, res: Response) => Promise<void>;
    updateUserByAdmin: (req: Request, res: Response) => Promise<void>;
    deleteUserByAdmin: (req: Request, res: Response) => Promise<void>;
    getAdminStats: (req: Request, res: Response) => Promise<void>;
    getSellerStats: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=user.controller.d.ts.map