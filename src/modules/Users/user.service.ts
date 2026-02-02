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

const updateUserByAdmin = async (userId: string, data: { role?: string; status?: boolean }) => {
    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: {
            ...(data.role && { role: data.role }),
            ...(typeof data.status === 'boolean' && { status: data.status })
        }
    });
    return updatedUser;
}

const deleteUserByAdmin = async (userId: string) => {
    const deletedUser = await prisma.user.delete({
        where: { id: userId }
    });
    return deletedUser;
}

const getAdminStats = async () => {
    const [userCount, medCount, orderCount, revenue] = await Promise.all([
        prisma.user.count(),
        prisma.medicine.count(),
        prisma.order.count(),
        prisma.order.aggregate({ _sum: { totalAmount: true } })
    ]);

    return {
        totalUsers: userCount,
        totalMedicines: medCount,
        totalOrders: orderCount,
        totalRevenue: revenue._sum.totalAmount || 0,
        recentOrders: []
    };
}

const getSellerStats = async (userId: string) => {
    const totalMedicines = await prisma.medicine.count({ where: { sellerId: userId } });
    const recentOrders = await prisma.order.findMany({
        where: { items: { some: { medicine: { sellerId: userId } } } },
        take: 5,
        orderBy: { createdAt: 'desc' }
    });
    const totalSales = await prisma.order.aggregate({
        where: { items: { some: { medicine: { sellerId: userId } } } },
        _sum: { totalAmount: true }
    });

    const totalAmount = await prisma.medicine.aggregate({
        where: { sellerId: userId },
        _sum: { price: true },
    });


    return {
        totalSales: totalSales,
        totalMedicines,
        newOrders: recentOrders.length,
        profitRate: ((totalAmount._sum.price! - totalSales._sum.totalAmount!) / (totalSales._sum.totalAmount! || 1)) * 100,
        recentOrders,
        totalRevenue: totalSales._sum.totalAmount || 0,
    };
}

export const userService = {
    getAllUsers,
    updateUser,
    updateUserByAdmin,
    deleteUserByAdmin,
    getAdminStats,
    getSellerStats
}