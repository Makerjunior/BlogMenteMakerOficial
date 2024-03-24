import { Request, Response } from "express";
import { PATH } from "../../../variaveis";
import path from "path";

class UserController {
  public index(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/src/public/index.html`);
}
public blog(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/src/public/blog.html`);
}
public python(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/src/public/python.html`);
}
public sobre(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/src/public/sobre.html`);
}
public typescript(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/src/public/typescript.html`);
}
public flask(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/src/public/flask.html`);
}
public copiladorjs(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/src/public/copiladorjs.html`);
}
public nodemon(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/src/public/nodemon.html`);
}
public express(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/src/public/express.html`);
}
}

export const userController = new UserController();


