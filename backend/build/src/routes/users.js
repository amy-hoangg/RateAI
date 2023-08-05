"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const usersService_1 = __importDefault(require("../services/usersService"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(usersService_1.default.getAll());
});
router.post('/', (req, res) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const newUser = usersService_1.default.createNewUser(req.body);
        res.send(newUser);
    }
    catch (error) {
        let errorMessage = 'Something went wrong.';
        if (error instanceof Error) {
            errorMessage += ' Error: ' + error.message;
        }
        res.status(400).send(errorMessage);
    }
});
router.get('/:id', (req, res) => {
    const id = req.params.id;
    res.send(usersService_1.default.getOneUser(id));
});
exports.default = router;
//push data to the server
/**
 * // usersRoutes.ts

import express from 'express';
import User from './user'; // Import the User model

const router = express.Router();

// Fetch all users
router.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

export default router;
   
 */ 
