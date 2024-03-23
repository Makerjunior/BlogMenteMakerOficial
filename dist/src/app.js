"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const _1 = require(".");
const port = 80;
_1.main.server.listen(port, () => console.log(`Server is running ${port}`));
