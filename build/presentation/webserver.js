"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const UserRoute_1 = require("../infrastructure/routes/UserRoute");
const dependencies_1 = require("../config/dependencies");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, UserRoute_1.userRoute)(dependencies_1.dependencies));
app.listen(3000, () => {
    console.log(`server is runnning on ${3000}`);
});
exports.default = app;
