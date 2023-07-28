import express from "express";
import {
  registerController,
  loginController,
  getOrdersController,
  getAllOrdersController,
  orderStatusController,
} from "../controllers/authController.js";

import {requireSignIn, isAdmin} from "../moddlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// Protected user Route Auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ok: true});
});

// Protected Admin Route Auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
  res.status(200).send({ok: true});
});

// get Orders
router.get("/orders", requireSignIn, getOrdersController);

// all Orders
router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

// Order Status code
router.put(
  "/status-update/:orderId",
  requireSignIn,
  isAdmin,
  orderStatusController
);
export default router;
