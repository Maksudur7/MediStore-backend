import { prisma } from "../../lib/prisma";
const postReview = async (userId, medicineId, rating, comment) => {
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
};
export const reviewServices = {
    postReview
};
//# sourceMappingURL=reviews.service.js.map