const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(cors({
    origin: process.env.APP_URL || "https://medistore-woad.vercel.app",
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true
}))
app.use(express.json());

app.get('/', (req, res) => {
    res.send('MediStore Backend is running successfully!');
});


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports = app;