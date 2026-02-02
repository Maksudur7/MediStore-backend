import { prisma } from "../../lib/prisma";


const postReview = async (userId: string, medicineId: string, rating: number, comment: string) => {
    const hasOrdered = await prisma.order.findFirst({
        where: {
            customerId: userId,
            status: "DELIVERED",
            items: {
                some: {
                    medicineId: medicineId
                }
            }
        }
    });

    if (!hasOrdered) {
        throw new Error("You can only review medicines you have purchased and received.");
    }

    return await prisma.review.create({
        data: {
            customerId: userId,
            medicineId: medicineId,
            rating,
            comment
        }
    });
}

const getAllReviews = async () => {
    return await prisma.review.findMany({
        include: {
            customer: true,
            medicine: true
        },
        orderBy: { createdAt: 'desc' }
    });
}

export const reviewServices = {
    postReview,
    getAllReviews
}