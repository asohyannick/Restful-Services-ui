import express  from "express";
const app = express();
app.use(express.json());
app.get('/api/v1', (req, res) => {
    res.send('The bare bone structure of our backend is already set up.');
});
const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`);
});