import express = require("express");
import { router } from "./router";
import path = require("path");

class  Main{
  private _server;
  constructor(){
    this._server = express();
    this._middleware();
    this._router();
    this._server.use(express.static(path.join(__dirname, 'public')))
    
  }
  private _middleware(){
    this._server.use(express.json());
  }
  private  _router() {
    this._server.use(router)
  }

  get server(){
    return this._server;
  }



}

export const main = new  Main()