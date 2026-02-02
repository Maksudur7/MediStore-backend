import { Request, Response } from "express";
export declare const medicinController: {
    getAllMedicines: (req: Request, res: Response) => Promise<void>;
    getMedicinById: (req: Request, res: Response) => Promise<void>;
    createMedicine: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateMedicine: (req: Request, res: Response) => Promise<void>;
    deleteMedicine: (req: Request, res: Response) => Promise<void>;
};
//# sourceMappingURL=medicines.controller.d.ts.map