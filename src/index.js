// require("dotenv").config();
import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: "../.env",
});

const app = express();

app.use(express.json());

connectDB()
.then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log(` Server is running on port ${process.env.PORT}`);
    })
})
.catch((err) => {
    console.error("Mongodb connection failed:", err);
});
