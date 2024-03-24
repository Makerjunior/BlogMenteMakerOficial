import { Router } from "express";
import { userController } from "./User-Controller";
import path from "path";

const router = Router();
const baseUrl = '/';

router.get(`${baseUrl}`, userController.index);
router.get(`${baseUrl}blog`, userController.blog);
router.get(`${baseUrl}sobre`, userController.sobre);
router.get(`${baseUrl}typescript`, userController.typescript);
router.get(`${baseUrl}python`, userController.python);
router.get(`${baseUrl}flask`, userController.flask);
router.get(`${baseUrl}copiladorjs`, userController.copiladorjs);
router.get(`${baseUrl}nodemon`, userController.nodemon);
router.get(`${baseUrl}express`, userController.express);



export const userRouter = router;
