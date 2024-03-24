"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const variaveis_1 = require("../../../variaveis");
class UserController {
    index(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/src/public/index.html`);
    }
    blog(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/src/public/blog.html`);
    }
    python(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/src/public/python.html`);
    }
    sobre(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/src/public/sobre.html`);
    }
    typescript(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/src/public/typescript.html`);
    }
    flask(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/src/public/flask.html`);
    }
    copiladorjs(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/src/public/copiladorjs.html`);
    }
    nodemon(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/src/public/nodemon.html`);
    }
    express(req, res) {
        return res.sendFile(`${variaveis_1.PATH}/src/public/express.html`);
    }
}
exports.userController = new UserController();
