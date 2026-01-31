import { prisma } from "../../lib/prisma";
const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
};
const updateUser = async (userId, data) => {
    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: data
    });
    return updatedUser;
};
const updateUserByAdmin = async (userId, userStatus) => {
    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
            status: userStatus
        }
    });
    return updatedUser;
};
export const userService = {
    getAllUsers,
    updateUser,
    updateUserByAdmin
};
//# sourceMappingURL=user.service.js.map