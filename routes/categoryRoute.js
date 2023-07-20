import express from "express";
import {isAdmin, requireSignIn} from "../moddlewares/authMiddleware.js";
import {
  createCategoryController,
  updateCategoryController,
  categoryController,
  singleCategoryController,
  deleteCategoryController,
} from "../controllers/categoryController.js";

const router = express.Router();

// create category
router.post(
  "/create-category",
  requireSignIn,
  isAdmin,
  createCategoryController
);

// update category
router.put(
  "/update-category:id",
  requireSignIn,
  isAdmin,
  updateCategoryController
);

// Get All Categorys
router.get("/get-category", categoryController);

// get single category
router.get("/single-category:slug", singleCategoryController);

// delete category category
router.delete(
  "/delete-category:id",
  requireSignIn,
  isAdmin,
  deleteCategoryController
);

export default router;
