
import { main } from ".";

const port:number= 80;
main.server.listen(port,
     () => console.log(`Server is running ${port}`));