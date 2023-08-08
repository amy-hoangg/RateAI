
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import express from "express";
import searchService from "../services/searchService";

/* eslint-disable @typescript-eslint/no-misused-promises */
const router = express.Router();

router.get('/:term', async (req, res) => {
  const searchTerm = req.params.term;
  if (typeof searchTerm !== 'string') {
    // Handle the case where searchTerm is not a string
    res.status(400).json({ error: 'Invalid search term' });
    return;
  }
  try {
    // Call the searchAI function from the aisService
    const searchResults = await searchService.searchAI(searchTerm);
    // Send the search results as the response
    res.json(searchResults);
  } 
  catch (error) {
    console.error('Error searching AI:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;