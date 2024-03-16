"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
class UserController {
    read(req, res) {
        return res.json({ data: "Hello World" });
    }
}
exports.userController = new UserController();
