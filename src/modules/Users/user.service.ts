import { prisma } from "../../lib/prisma";

const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
}

const updateUser = async (userId: string, data: { name?: string; email?: string, image?: string, phone?: string }) => {
    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: data
    });
    return updatedUser;
}

const updateUserByAdmin = async (userId: string, userStatus: boolean) => {
    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
            status: userStatus
        }
    });
    return updatedUser;
}

export const userService = {
    getAllUsers,
    updateUser,
    updateUserByAdmin
}