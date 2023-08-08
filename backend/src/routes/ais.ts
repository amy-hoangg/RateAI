/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-misused-promises */
import express from 'express';
import aisService from '../services/aisService';

const router = express.Router();

router.get('/', async (_req, res) => {
  const allAI = await aisService.getAll();
  res.send(allAI);
});


router.post('/', async (req, res) => {
  try {
    const newAI = await aisService.createNewAI(req.body);
    res.send(newAI);
  } 
  
  catch (error: unknown) {
    let errorMessage = 'Something went wrong.';
    if (error instanceof Error) {
      errorMessage += ' Error: ' + error.message;
    }
    res.status(400).send(errorMessage);
  }
});

// eslint-disable-next-line @typescript-eslint/no-misused-promises
router.get('/fetch/:id', async (req, res) => {
  const id = req.params.id;
  console.log('ID:', id); // Add this line
  const ai = await aisService.getOneAI(id);
  if (ai) {
    res.send(ai);
  } else {
    res.status(404).send('AI not found');
  }
});


router.get('/search/:term', async (req, res) => {
  const searchTerm = req.params.term;
  if (typeof searchTerm !== 'string') {
    // Handle the case where searchTerm is not a string
    res.status(400).json({ error: 'Invalid search term' });
    return;
  }
  try {
    // Call the searchAI function from the aisService
    const searchResults = await aisService.searchAI(searchTerm);
    // Send the search results as the response
    res.json(searchResults);
  } 
  catch (error) {
    console.error('Error searching AI:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


export default router;
