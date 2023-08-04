import express from "express";
import {isAdmin, requireSignIn} from "../moddlewares/authMiddleware.js";
import {
  createProductController,
  getpropductController,
  getSingleProductController,
  productPhotoController,
  searchProductController,
  relatedProductController,
  braintreeTokenController,
  razorpayPaymentController,
} from "../controllers/productController.js";

import formidable from "express-formidable";

const router = express.Router();

// create Product
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProductController
);

// get All products
router.get("/get-products", getpropductController);

// Get Single Products
router.get("/get-product/:slug", getSingleProductController);

// Get photo
router.get("/product-photo/:pid", productPhotoController);

// search product
router.get("/search/:keyword", searchProductController);

// updateOrderPricesController
// router.put("/orders/:orderId/update-prices", updateOrderPricesController);

// similar Product
router.get("/related-products/:cid", relatedProductController);
// router.get("/rrelated-products/:pid/:cid", relatedProductController);
// payment routes
// token
router.get("/braintree/token", braintreeTokenController);

// payment
//  router.post("/braintree/payment", requireSignIn, braintreePaymentController);
router.post("/razorpay/payment", requireSignIn, razorpayPaymentController);

export default router;
