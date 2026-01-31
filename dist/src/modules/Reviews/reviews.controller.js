import { reviewServices } from "./reviews.service";
const postReview = async (req, res) => {
    try {
        const { userId } = req.user;
        const { medicineId, rating, comment } = req.body;
        const result = await reviewServices.postReview(userId, medicineId, rating, comment);
        res.status(200).json(result);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to post Medicin", details: error.message });
    }
};
export const reviewController = {
    postReview
};
//# sourceMappingURL=reviews.controller.js.map