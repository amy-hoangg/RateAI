"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const ais_1 = __importDefault(require("./routes/ais"));
const reviews_1 = __importDefault(require("./routes/reviews"));
const users_1 = __importDefault(require("./routes/users"));
const sellers_1 = __importDefault(require("./routes/sellers"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const PORT = 3003;
app.get('/ping', (_req, res) => {
    console.log('someone pinged here');
    res.send('pong');
});
app.use('/api/ais', ais_1.default);
app.use('/api/reviews', reviews_1.default);
app.use('/api/users', users_1.default);
app.use('/api/sellers', sellers_1.default);
console.log('Starting the server in production mode...');
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
