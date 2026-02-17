import express, { Application } from 'express'
import cors from "cors"
import { userRouter } from './modules/Users/users.router'
import { reviewsRouter } from './modules/Reviews/reviews.router'
import { cartRouter } from './modules/cart/cart.router'
import { medicinesRouter } from './modules/Medicines/medicines.router'
import { authRouter } from './modules/Auth/auth.router'
import { categoryRouter } from './modules/Category/category.router'
import { orderRouter } from './modules/Orders/orders.router'
const app: Application = express()


app.use(cors({
    origin: [process.env.APP_URL || "https://medistore-woad.vercel.app", process.env.APP_URL2 || "http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
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
app.use('/cart', cartRouter)

export default app;