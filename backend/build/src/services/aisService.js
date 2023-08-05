"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const aisdata_1 = __importDefault(require("../../data/aisdata"));
const uuid_1 = require("uuid");
const getAll = () => {
    return aisdata_1.default;
};
const createNewAI = (newAI) => {
    const addedAI = Object.assign(Object.assign({}, newAI), { id: (0, uuid_1.v1)() });
    return addedAI;
};
const getOneAI = (id) => {
    return aisdata_1.default.find(p => p.id === id);
};
exports.default = {
    getAll,
    createNewAI,
    getOneAI
};
