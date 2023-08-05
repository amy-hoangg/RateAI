"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sellersdata_1 = __importDefault(require("../../data/sellersdata"));
const uuid_1 = require("uuid");
const getAll = () => {
    return sellersdata_1.default;
};
const createNewSeller = (newSeller) => {
    const addedSeller = Object.assign(Object.assign({}, newSeller), { seller_id: (0, uuid_1.v1)() });
    return addedSeller;
};
const getOneSeller = (id) => {
    return sellersdata_1.default.find(p => p.id === id);
};
exports.default = {
    getAll,
    createNewSeller,
    getOneSeller
};
//how can it fetch data from database
