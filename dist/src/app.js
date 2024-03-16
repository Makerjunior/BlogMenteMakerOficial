"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const _1 = require(".");
dotenv.config();
_1.main.server.listen(process.env.PORT, () => console.log(`Server is running ${process.env.PORT}`));
