"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv = require("dotenv");
const app_1 = require("./app");
dotenv.config();
app_1.main.server.listen(process.env.PORT, () => console.log(`Server is running ${process.env.PORT}`));
