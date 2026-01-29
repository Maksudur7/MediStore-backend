import { Request, Response } from "express"
import { userService } from "./user.service";

const getAllUsers = async (req: Request, res: Response) => {
    try {
        const users = await userService.getAllUsers();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
}

const updateUser = async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
        const updatedUser = await userService.updateUser(id as string, req.body);
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
}

const updateUserByAdmin = async (req: Request, res: Response) => {
    const { id } = req.params;
    const {status} = req.body;
    try {
        const updatedUser = await userService.updateUserByAdmin(id as string, status);
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
}

export const userController = {
    getAllUsers,
    updateUser,
    updateUserByAdmin
}