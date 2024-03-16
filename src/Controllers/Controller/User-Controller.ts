import { Request, Response } from "express";
import { PATH } from "../../../variaveis";
import path from "path";

class UserController {
  public index(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/public/index.html`);
}
public blog(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/public/blog.html`);
}
public python(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/public/python.html`);
}
public sobre(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/public/sobre.html`);
}
public typescript(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/public/typescript.html`);
}
public flask(req: Request, res: Response) {
  return  res.sendFile(`${PATH}/public/flask.html`);
}
}

export const userController = new UserController();


