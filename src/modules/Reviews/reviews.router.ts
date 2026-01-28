import { Router } from "express";
import { reviewController } from "./reviews.controller";
import { verifyToken } from "../../middleware/verifyToken";

const router = Router()

router.post('/', verifyToken, reviewController.postReview)

export const reviewsRouter: Router = router;