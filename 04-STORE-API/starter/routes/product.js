import { Router } from "express";
import {getAllProductsStatic, getAllProducts} from "../controllers/product.js"

const router=Router()

router.route('/static').get(getAllProductsStatic)
router.route('/').get(getAllProducts)

export default router   