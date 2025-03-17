import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log(err));

const portfolioSchema = new mongoose.Schema({
  title: String,
  description: String,
  image: String,
  link: String,
});

const Portfolio = mongoose.model("Portfolio", portfolioSchema, "portfolio");

app.get("/api/portfolio", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 8;

    const totalItems = await Portfolio.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    const projects = await Portfolio.find()
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({ items: projects, totalPages });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
