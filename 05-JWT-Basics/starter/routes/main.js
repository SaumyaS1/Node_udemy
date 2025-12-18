import { Router } from "express";
import {login, dashboard} from "../controllers/main.js"
import authentictaion from "../middleware/auth.js";

const router=Router();

router.route('/dashboard').get(authentictaion,dashboard)
router.route('/login').post(login)

export default router