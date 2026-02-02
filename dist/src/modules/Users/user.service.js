import { prisma } from "../../lib/prisma";
const getAllUsers = async () => {
    const users = await prisma.user.findMany();
    return users;
};
const updateUser = async (userId, data) => {
    const updateData = {};
    if (data.name)
        updateData.name = data.name;
    if (data.email)
        updateData.email = data.email;
    if (data.image)
        updateData.image = data.image;
    if (data.phone)
        updateData.phone = data.phone;
    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updateData
    });
    return updatedUser;
};
const updateUserByAdmin = async (userId, data) => {
    const updateData = {};
    if (data.role)
        updateData.role = data.role;
    if (typeof data.status === 'boolean')
        updateData.status = data.status;
    const updatedUser = await prisma.user.update({
        where: { id: userId },
        data: updateData
    });
    return updatedUser;
};
const deleteUserByAdmin = async (userId) => {
    const deletedUser = await prisma.user.delete({
        where: { id: userId }
    });
    return deletedUser;
};
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
};
const getSellerStats = async (userId) => {
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
    const revenue = totalSales._sum.totalAmount || 0;
    const medicinePriceTotal = totalAmount._sum.price || 0;
    return {
        totalSales: totalSales,
        totalMedicines,
        newOrders: recentOrders.length,
        // প্রফিট ক্যালকুলেশনে 0 দিয়ে ভাগ হওয়া এড়াতে চেক:
        profitRate: revenue > 0 ? ((medicinePriceTotal - revenue) / revenue) * 100 : 0,
        recentOrders,
        totalRevenue: revenue,
    };
};
export const userService = {
    getAllUsers,
    updateUser,
    updateUserByAdmin,
    deleteUserByAdmin,
    getAdminStats,
    getSellerStats
};
//# sourceMappingURL=user.service.js.map