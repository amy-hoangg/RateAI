"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reviewsService_1 = __importDefault(require("../services/reviewsService"));
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send(reviewsService_1.default.getAll());
});
router.post('/', (req, res) => {
    try {
        // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
        const newReview = reviewsService_1.default.createNewReview(req.body);
        res.send(newReview);
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
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    res.send(reviewsService_1.default.getOneReview(id));
});
exports.default = router;
