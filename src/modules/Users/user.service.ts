import { prisma } from "../../lib/prisma";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const updateUser = async (userId: string, data: { name?: string; email?: string, image?: string , phone?: string}) => {
    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: data
    });
    return updatedUser;
}

export const userService = {
    getAllUsers,
    updateUser
}