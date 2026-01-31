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
    const { status } = req.body;
    try {
        const updatedUser = await userService.updateUserByAdmin(id, status);
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
};
export const userController = {
    getAllUsers,
    updateUser,
    updateUserByAdmin
};
//# sourceMappingURL=user.controller.js.map