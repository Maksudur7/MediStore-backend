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

const getMedicinById = async (req: Request, res: Response) => {
    try {
        const id = req.params.medicinId
        const result = await medicinesService.getMedicinById(id as string)
        res.status(200).json(result)
    } catch (error) {
        res.status(400).json({
            error: "Failed to fetch medicine dettles",
            details: error
        })
    }
}

export const medicinController = {
    getAllMedicines,
    getMedicinById
}