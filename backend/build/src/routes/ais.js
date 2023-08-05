"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const aisService_1 = __importDefault(require("../services/aisService"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(aisService_1.default.getAll());
});
router.post('/', (req, res) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const newAI = aisService_1.default.createNewAI(req.body);
        res.send(newAI);
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
    res.send(aisService_1.default.getOneAI(id));
});
exports.default = router;
//push data to the server
