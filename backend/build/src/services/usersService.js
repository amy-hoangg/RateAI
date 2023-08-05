"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const usersdata_1 = __importDefault(require("../../data/usersdata"));
const uuid_1 = require("uuid");
const getAll = () => {
    return usersdata_1.default;
};
const createNewUser = (newUser) => {
    const addedUser = Object.assign(Object.assign({}, newUser), { id: (0, uuid_1.v1)() });
    return addedUser;
};
const getOneUser = (id) => {
    return usersdata_1.default.find(p => p.id === id);
};
exports.default = {
    getAll,
    createNewUser,
    getOneUser
};
//how can it fetch data from database
