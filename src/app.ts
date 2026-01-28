import express, { Application } from 'express'
import cors from "cors"
import { userRouter } from './modules/Users/users.router'
import { reviewsRouter } from './modules/Reviews/reviews.router'
import { orderRouter } from './modules/Orders/orders.router'
import { medicinesRouter } from './modules/Medicines/medicines.router'
import { categoryRouter } from './modules/Category/category.service'
const app: Application = express()


app.use(cors({
    origin: process.env.APP_URL || "http://localhost:5000",
    credentials: true
}))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use("/users", userRouter)
app.use("/reviews", reviewsRouter)
app.use("/order", orderRouter)
app.use("/medicines", medicinesRouter)
app.use("/category", categoryRouter)

export default app;