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
    const { userId } = req.params;
    try {
        const updatedUser = await userService.updateUser(userId as string, req.body);
        res.status(200).json(updatedUser);
    }
    catch (error) {
        res.status(500).json({ message: "Internal server error", error });
    }
}


export const userController = {
    getAllUsers,
    updateUser
}