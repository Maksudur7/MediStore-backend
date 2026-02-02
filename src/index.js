const app = require('./src/app');
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("MediStore Backend is running successfully on Vercel!");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;