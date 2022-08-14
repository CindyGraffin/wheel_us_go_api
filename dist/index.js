"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const mongoose_1 = __importDefault(require("mongoose"));
const app = (0, express_1.default)();
// loads .env file contents into process.env
dotenv_1.default.config();
const PORT = process.env.PORT;
const MONGO_DB = process.env.MONGO_DB;
const connect = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield mongoose_1.default.connect(`${MONGO_DB}`);
        console.log('Connection to mongoDB successful');
    }
    catch (error) {
        throw (error);
    }
});
//middlewares
app.use((0, cors_1.default)());
// allow to send json
app.use(express_1.default.json());
app.get('/', (req, res) => {
    res.send('hello user');
});
app.listen(PORT, () => {
    connect();
    console.log(`app is running on port ${PORT}`);
});
