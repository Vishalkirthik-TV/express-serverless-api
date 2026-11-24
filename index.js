import express from "express";

const app = express();

const PORT = Number(process.env.PORT || 5757);

app.get("/api/health", (req, res) => {
    res.json({ message: "Hello from express serverless function!" });
})

app.listen(PORT, () => {
    console.log("Server listening on port", PORT);
})