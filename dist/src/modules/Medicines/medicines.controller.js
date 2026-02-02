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
        const user = req.user;
        if (!user || !user.id) {
            return res.status(401).json({ success: false, message: "Seller identity missing" });
        }
        const medicineData = {
            ...req.body,
            price: parseFloat(req.body.price),
            stockQuantity: parseInt(req.body.stockQuantity),
            sellerId: user.id
        };
        const result = await medicinesService.createMedicine(medicineData);
        res.status(201).json({
            success: true,
            message: "Medicine created successfully",
            data: result
        });
    }
    catch (error) {
        console.error("CREATE ERROR:", error.message);
        res.status(400).json({
            success: false,
            error: "Failed to create medicine",
            details: error.message
        });
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