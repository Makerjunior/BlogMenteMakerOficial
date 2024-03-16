"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = require("express");
const User_Controller_1 = require("./User-Controller");
const router = (0, express_1.Router)();
const baseUrl = '/user';
router.get(`${baseUrl}/read`, User_Controller_1.userController.read);
exports.userRouter = router;
