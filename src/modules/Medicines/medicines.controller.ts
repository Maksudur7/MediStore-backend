import { Request, Response } from "express"
import { medicinesService } from "./medicines.service";


const getAllMedicines = async (req: Request, res: Response) => {
    try {
        const result = await medicinesService.getAllMedicines(req.query);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json({ error: "Failed to fetch Medicin", details: error });
    }
}

export const medicinController = {
    getAllMedicines
}