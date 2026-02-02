import { userService } from "./user.service";
const getAllUsers = async (req, res) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
const updateUser = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedUser = await userService.updateUser(id, req.body);
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
const updateUserByAdmin = async (req, res) => {
    const { id } = req.params;
    const { role, status } = req.body;
    try {
        const updatedUser = await userService.updateUserByAdmin(id, { role, status });
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
const deleteUserByAdmin = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedUser = await userService.deleteUserByAdmin(id);
        res.status(200).json(deletedUser);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
const getAdminStats = async (req, res) => {
    try {
        const stats = await userService.getAdminStats();
        res.status(200).json(stats);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
const getSellerStats = async (req, res) => {
    const userId = req.user.id;
    try {
        const stats = await userService.getSellerStats(userId);
        res.status(200).json(stats);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
export const userController = {
    getAllUsers,
    updateUser,
    updateUserByAdmin,
    deleteUserByAdmin,
    getAdminStats,
    getSellerStats
};
//# sourceMappingURL=user.controller.js.map