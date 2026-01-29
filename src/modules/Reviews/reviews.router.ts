import { Router } from "express";
import { reviewController } from "./reviews.controller";
import { verifyToken } from "../../middleware/verifyToken";
import { isPermitted } from "../../middleware/checkUserStatus";

const router = Router()

router.post('/', isPermitted, verifyToken, reviewController.postReview)

export const reviewsRouter: Router = router;