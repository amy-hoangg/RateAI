"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const reviewsdata_1 = __importDefault(require("../../data/reviewsdata"));
const uuid_1 = require("uuid");
const getAll = () => {
    return reviewsdata_1.default;
};
const createNewReview = (newreview) => {
    const addedReview = Object.assign(Object.assign({}, newreview), { id: (0, uuid_1.v1)() });
    return addedReview;
};
const getOneReview = (id) => {
    return reviewsdata_1.default.find(p => p.id === id);
};
exports.default = {
    getAll,
    createNewReview,
    getOneReview
};
