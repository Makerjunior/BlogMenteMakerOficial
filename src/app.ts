import dotenv = require('dotenv');
import { main } from ".";
dotenv.config();

main.server.listen(process.env.PORT ,
     () => console.log(`Server is running ${process.env.PORT}`));