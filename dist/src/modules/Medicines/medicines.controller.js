import { medicinesService } from "./medicines.service";
const getAllMedicines = async (req, res) => {
    try {
        const result = await medicinesService.getAllMedicines(req.query);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to fetch Medicin", details: error.message });
    }
};
const getMedicinById = async (req, res) => {
    try {
        const id = req.params.medicinId;
        const result = await medicinesService.getMedicinById(id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({
            error: "Failed to fetch medicine dettles",
            details: error.message
        });
    }
};
const createMedicine = async (req, res) => {
    try {
        const medicineData = req.body;
        const result = await medicinesService.createMedicine(medicineData);
        res.status(201).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to create medicine", details: error.message });
    }
};
const updateMedicine = async (req, res) => {
    try {
        const id = req.params.medicinId;
        const medicineData = req.body;
        const result = await medicinesService.updateMedicine(id, medicineData);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to update medicine", details: error.message });
    }
};
const deleteMedicine = async (req, res) => {
    try {
        const id = req.params.medicinId;
        const result = await medicinesService.deleteMedicine(id);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to delete medicine", details: error.message });
    }
};
export const medicinController = {
    getAllMedicines,
    getMedicinById,
    createMedicine,
    updateMedicine,
    deleteMedicine
};
//# sourceMappingURL=medicines.controller.js.map