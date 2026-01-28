import { prisma } from "../../lib/prisma"

const getAllMedicines = async (query: any) => {
    const { search, category, min_price, max_price, manufacturer } = query;
    const andConditions: any[] = [];
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

export const medicinesService = {
    getAllMedicines
};