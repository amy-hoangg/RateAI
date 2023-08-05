"use strict";
// src/models/user.ts
exports.__esModule = true;
var mongoose_1 = require("mongoose");
var userSchema = new mongoose_1.Schema({
    id: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    saves: { type: [String], "default": [] },
    purchases: { type: [String], "default": [] },
    seller_id: { type: String, required: true }
});
exports["default"] = (0, mongoose_1.model)('User', userSchema);
