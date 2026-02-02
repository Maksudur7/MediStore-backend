import { Request, Response } from "express";
export declare const orderController: {
    addToCard: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getCartByUserId: (req: Request, res: Response) => Promise<void>;
    updateOrder: (req: Request, res: Response) => Promise<void>;
    deletOrder: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=cart.controller.d.ts.map