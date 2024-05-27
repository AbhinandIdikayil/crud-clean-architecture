"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.controllers = void 0;
const listUsers_1 = require("./listUsers");
const controllers = (dependencies) => {
    return {
        listUsers: (0, listUsers_1.listProductContoller)(dependencies)
    };
};
exports.controllers = controllers;
