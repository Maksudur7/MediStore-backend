import express , {Application} from 'express'
import cors from "cors"
const app: Application = express()


app.use(cors({
    origin: process.env.APP_URL || "http://localhost:5000",
    credentials: true
}))

app.get('/', (req, res) => {
    res.send('Hello World!')
})

export default app;