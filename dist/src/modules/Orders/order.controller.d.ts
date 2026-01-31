import { Request, Response } from "express";
export declare const orderController: {
    addToCard: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    pleaseOrder: (req: Request, res: Response) => Promise<void>;
    trackOrder: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    getAllOrdersBySellerId: (req: Request, res: Response) => Promise<void>;
    getAllOrders: (req: Request, res: Response) => Promise<void>;
    getCartByUserId: (req: Request, res: Response) => Promise<void>;
    getMyOrders: (req: Request, res: Response) => Promise<void>;
    getOrderDetails: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=order.controller.d.ts.map