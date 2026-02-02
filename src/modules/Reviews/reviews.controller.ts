import { Request, Response } from "express"
import { reviewServices } from "./reviews.service";

const postReview = async (req: Request, res: Response) => {
    try {
        const { userId } = req.user;
        const { medicineId, rating, comment } = req.body
        const result = await reviewServices.postReview(userId, medicineId, rating, comment)
        res.status(200).json(result);

    } catch (error: any) {
        res.status(400).json({ error: "Failed to post Medicin", details: error.message });
    }
}

const getAllReviews = async (req: Request, res: Response) => {
    try {
        const reviews = await reviewServices.getAllReviews();
        res.status(200).json(reviews);
    } catch (error: any) {
        res.status(400).json({ error: "Failed to get reviews", details: error.message });
    }
}

export const reviewController = {
    postReview,
    getAllReviews
}