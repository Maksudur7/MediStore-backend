import { prisma } from "../../lib/prisma";
const getAllMedicines = async (query) => {
    const { search, category, min_price, max_price, manufacturer } = query;
    const andConditions = [];
    if (search) {
        andConditions.push({
            OR: [
                {
                    name: {
                        contains: search,
                        mode: 'insensitive',
                    },
                },
                {
                    manufacturer: {
                        contains: search,
                        mode: 'insensitive',
                    },
                },
                {
                    description: {
                        contains: search,
                        mode: 'insensitive',
                    },
                },
            ],
        });
    }
    if (category) {
        andConditions.push({
            category: {
                name: {
                    equals: category,
                    mode: 'insensitive',
                },
            },
        });
    }
    if (manufacturer) {
        andConditions.push({
            manufacturer: {
                contains: manufacturer,
                mode: 'insensitive',
            },
        });
    }
    if (min_price || max_price) {
        andConditions.push({
            price: {
                gte: min_price ? parseFloat(min_price) : undefined,
                lte: max_price ? parseFloat(max_price) : undefined,
            },
        });
    }
    const whereConditions = andConditions.length > 0 ? { AND: andConditions } : {};
    const result = await prisma.medicine.findMany({
        where: whereConditions,
        include: {
            category: true,
            seller: {
                select: {
                    name: true,
                    email: true
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
    return result;
};
const getMedicinById = async (id) => {
    return await prisma.medicine.findUniqueOrThrow({
        where: { id: id },
        include: {
            category: true,
            seller: true,
            reviews: true,
            orderItems: true
        }
    });
};
const createMedicine = async (medicineData) => {
    const categoryExists = await prisma.category.findUnique({
        where: { id: medicineData.categoryId }
    });
    if (!categoryExists) {
        throw new Error("Invalid Category ID provided!");
    }
    const result = await prisma.medicine.create({
        data: medicineData
    });
    return result;
};
const updateMedicine = async (id, medicineData) => {
    const result = await prisma.medicine.update({
        where: {
            id
        },
        data: medicineData
    });
    return result;
};
const deleteMedicine = async (id) => {
    const result = await prisma.medicine.delete({
        where: {
            id
        }
    });
    return result;
};
export const medicinesService = {
    getAllMedicines,
    getMedicinById,
    createMedicine,
    updateMedicine,
    deleteMedicine
};
//# sourceMappingURL=medicines.service.js.map