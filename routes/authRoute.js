import express from "express";
import {registerController, loginController, testController} from "../controllers/authController.js";

import {requireSignIn, isAdmin} from "../moddlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// REGISTER || METHOD POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

// test Route
router.get("/test", requireSignIn, isAdmin, testController);

// Protected user Route Auth
router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ok: true})
})


// Protected Admin Route Auth
router.get("/admin-auth", requireSignIn, isAdmin, (req, res) => {
    res.status(200).send({ok: true})
})

export default router;
