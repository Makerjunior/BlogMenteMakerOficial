"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const variaveis_1 = require("../../../variaveis");
class UserController {
    index(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/public/index.html`);
    }
    blog(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/public/blog.html`);
    }
    python(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/public/python.html`);
    }
    sobre(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/public/sobre.html`);
    }
    typescript(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/public/typescript.html`);
    }
    flask(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/public/flask.html`);
    }
}
exports.userController = new UserController();
