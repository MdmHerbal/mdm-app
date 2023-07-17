import express from "express";
import {isAdmin, requireSignIn} from "../moddlewares/authMiddleware.js";
import {createProductController, getpropductController, getSingleProductController, productPhotoController} from "../controllers/productController.js";
import formidable from "express-formidable";


const router = express.Router()

// create Product
router.post("/create-product", requireSignIn, isAdmin, formidable(), createProductController)

// get All products
router.get("/get-products", getpropductController)
export default router

// Get Single Products
router.get("/get-product/:slug", getSingleProductController)

// Get photo
router.get("/product-photo/:pid", productPhotoController)
