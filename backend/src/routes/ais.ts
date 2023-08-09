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

router.patch('/saves/:id', async (req, res) => {
  const aiId = req.params.id;

  try {
    // Update the saves count for the AI
    const updatedAI = await aisService.updateSaves(aiId);

    if (!updatedAI) {
      return res.status(404).json({ error: "AI not found" });
    }

    // Respond with the updated AI
    return res.json(updatedAI); // Add the "return" statement here
  } catch (error) {
    console.error("Error updating AI saves:", error);
    return res.status(500).json({ error: "An error occurred while updating AI saves" });
  }
});

export default router;
