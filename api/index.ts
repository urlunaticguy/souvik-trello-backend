import express from "express";

const app = express();

app.get("/", (req, res) => res.send("Express on Vercel Souvik"));

app.listen(8000, () => console.log("Server ready on port 8000."));

module.exports = app;