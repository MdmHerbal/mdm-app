import fs from "fs";
import productModel from "../models/productModel.js";
import slugify from "slugify";

export const createProductController = async (req, res) => {
  try {
    const {name, description, price, category, quantity, shipping} = req.fields;
    const {photo} = req.files;
    switch (true) {
      case !name:
        return res.status(500).send({error: "Name is Required"});
      case !description:
        return res.status(500).send({error: "description is Required"});
      case !price:
        return res.status(500).send({error: "price is Required"});
      case !category:
        return res.status(500).send({error: "category is Required"});
      case !quantity:
        return res.status(500).send({error: "quantity is Required"});
      case photo:
        return res
          .status(500)
          .send({error: "Photo is Required and should be less than 1MB"});
    }

    const product = new productModel({
      ...req.fields,
      slug: slugify(name),
    });

    if (photo) {
      product.photo.data = fs.readFileSync(photo.path);
      product.photo.contentType = photo.type;
    }
    await product.save();

    res
      .status(201)
      .send({success: true, message: "Successfully Created Product", product});
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({success: false, error, message: "Error While Creating product"});
  }
};

// get All Products
export const getpropductController = async (req, res) => {
  try {
    const products = await productModel
      .find({})
      .populate("category")
      .select("-photo")
      .limit(12);

    res.status(200).send({
      success: true,
      totalCount: products.length,
      message: "All Products",
      products,
    });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({success: false, error, message: "Error While get all Product"});
  }
};

// get Single Product
export const getSingleProductController = async (req, res) => {
  try {
    const product = await productModel
      .findOne({slug: req.params.slug})
      .select("-photo")
      .populate("category");
    res.status(200).send({success: true, message: "single Product", product});
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({success: false, error, message: "Error while getting product"});
  }
};

// filtered List
export const getFilteredProductsController = (req, res) => {
  try {
  } catch (error) {
    console.log(error);
  }
};

// product photo
export const productPhotoController = async (req, res) => {
  try {
    const product = await productModel.findById(req.params.pid).select("photo");
    if (product.photo.data) {
      res.set("content-type", product.photo.contentType);
      return res.status(200).send(product.photo.data);
    }
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({success: true, message: "Error photo Product", error});
  }
};

// delete Product
export const deleteProductController = async (req, res) => {
  try {
    const product = await productModel
      .findByIdAndDelete(req.params.pid)
      .select("-photo");
    res.status(200).send({success: true, message: "delete product", products});
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({success: false, message: "Error while deleting", error});
  }
};

//search products
export const searchProductController = async (req, res) => {
  try {
    const {keyword} = req.params;
    const result = await productModel
      .find({
        $or: [
          {name: {$regex: keyword, $options: "i"}},
          {description: {$regex: keyword, $options: "i"}},
        ],
      })
      .select("-photo");
    res.json(result);
  } catch (error) {
    console.log(error);
  }
};

//similar Products
export const relatedProductController = async (req, res) => {
  try {
    const {cid} = req.params;

    const product = await productModel
      .find({
        category: cid,
      })
      .select("-photo")
      .limit(3)
      .populate("category");
    res
      .status(200)
      .send({success: true, message: "Successfully Fetched", product});
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Error While Getting Related Products",
      error,
    });
  }
};
