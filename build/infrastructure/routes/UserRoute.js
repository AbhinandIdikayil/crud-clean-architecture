"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRoute = void 0;
const express_1 = require("express");
const admin_1 = require("../../presentation/controllers/admin");
const userRoute = (dependencies) => {
    const adminRoute = (0, express_1.Router)();
    const { listUsers } = (0, admin_1.controllers)(dependencies);
    adminRoute.route('/users').get(listUsers);
    return adminRoute;
};
exports.userRoute = userRoute;
