"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usersData = [
    {
        id: "1",
        username: "john_doe",
        password: "password123",
        firstname: "John",
        lastname: "Doe",
        email: "john.doe@example.com",
        saves: ["ai_1", "ai_3", "ai_5"],
        purchases: ["ai_2", "ai_4"],
        seller_id: "seller_1",
    },
    {
        id: "2",
        username: "alice_smith",
        password: "abc123",
        firstname: "Alice",
        lastname: "Smith",
        email: "alice.smith@example.com",
        saves: ["ai_3", "ai_6"],
        purchases: ["ai_1", "ai_5", "ai_8"],
        seller_id: "seller_2",
    },
    {
        id: "3",
        username: "bob_johnson",
        password: "bob987",
        firstname: "Bob",
        lastname: "Johnson",
        email: "bob.johnson@example.com",
        saves: ["ai_2", "ai_4", "ai_7"],
        purchases: ["ai_3", "ai_6"],
        seller_id: "seller_1",
    }
];
exports.default = usersData;
