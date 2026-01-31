import express, { Application } from 'express'
import cors from "cors"
import { userRouter } from './modules/Users/users.router'
import { reviewsRouter } from './modules/Reviews/reviews.router'
import { orderRouter } from './modules/Orders/orders.router'
import { medicinesRouter } from './modules/Medicines/medicines.router'
import { authRouter } from './modules/Auth/auth.router'
import { categoryRouter } from './modules/Category/category.router'
const app: Application = express()


app.use(cors({
    origin: process.env.APP_URL || "http://localhost:5000",
    credentials: true
}))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/auth", authRouter)
app.use("/user", userRouter)
app.use("/reviews", reviewsRouter)
app.use("/orders", orderRouter)
app.use("/medicines", medicinesRouter)
app.use("/category", categoryRouter)

export default app;