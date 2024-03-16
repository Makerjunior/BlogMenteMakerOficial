"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
const express = require("express");
const router_1 = require("./router");
const path = require("path");
class Main {
    constructor() {
        this._server = express();
        this._middleware();
        this._router();
        this._server.use(express.static(path.join(__dirname, '../public')));
    }
    _middleware() {
        this._server.use(express.json());
    }
    _router() {
        this._server.use(router_1.router);
    }
    get server() {
        return this._server;
    }
}
exports.main = new Main();
