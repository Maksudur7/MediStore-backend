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
const getAllReviews = async (req, res) => {
    try {
        const reviews = await reviewServices.getAllReviews();
        res.status(200).json(reviews);
    }
    catch (error) {
        res.status(400).json({ error: "Failed to get reviews", details: error.message });
    }
};
export const reviewController = {
    postReview,
    getAllReviews
};
//# sourceMappingURL=reviews.controller.js.map