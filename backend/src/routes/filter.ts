import express from "express";
import filterService from "../services/filterService";

const router = express.Router();

router.get("/filter", async (req, res) => {
  try {
    const selectedCategories = req.query.category?.toString().split(",") || [];
    const selectedPrice = req.query.price?.toString().split(",") || [];

    const filteredAIs = await filterService.filterAI(selectedCategories, selectedPrice);

    res.json(filteredAIs);
  } 
  catch (error) {
    console.error("Error filtering AIs:", error);
    res.status(500).json({ error: "An error occurred while filtering AIs." });
  }
});

export default router;
