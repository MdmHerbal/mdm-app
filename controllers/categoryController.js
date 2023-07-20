import categoryModel from "../models/categoryModel.js";
import slugify from "slugify";

// create category controll
export const createCategoryController = async (req, res) => {
  try {
    const {name} = req.body;

    if (!name) {
      return res.status(401).send({message: "Name is Required"});
    }

    const existCategory = await categoryModel.findOne({name});

    if (existCategory) {
      return res
        .status(200)
        .send({success: false, message: "Category is Alredy Exist"});
    }

    const category = await new categoryModel({
      name,
      slug: slugify(name),
    }).save();

    res
      .status(201)
      .send({success: true, message: "Successfully Created", data: category});
  } catch (error) {
    console.log(error);
    res.status(500).send({success: false, error, message: "Error in Category"});
  }
};

// upodate category caontroller\
export const updateCategoryController = async (req, res) => {
  try {
    const {name} = req.body;
    const {id} = req.params;

    const category = await categoryModel.findByIdAndUpdate(
      id,
      {
        slug: slugify(name),
      },
      {new: true}
    );
    res
      .send(200)
      .send({success: true, message: "Successfully Updated", category});
  } catch (error) {
    console.log(error);
    res
      .status(400)
      .send({success: false, error, message: "Error while Updating Category"});
  }
};

// get all category
export const categoryController = async (req, res) => {
  try {
    const category = await categoryModel.find({});
    res
      .status(201)
      .send({success: true, message: "All Categories List", category});
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while getting all Category",
      error,
    });
  }
};

// get single category
export const singleCategoryController = async (req, res) => {
  try {
    const category = await categoryModel.findOne({slug: req.body.params});
    res.status(200).send({
      success: true,
      message: "Get Single Category Successfully",
      category,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      error,
      message: "Error while getting single category",
    });
  }
};

// Delete category contro9ller
export const deleteCategoryController = async (req, res) => {
  try {
    const {id} = req.params;
    await categoryModel.findByIdAndDelete(id);
    res.status(200).send({success: true, message: "Successfully Deleted"});
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({success: false, error, message: "Error Deleting Category"});
  }
};
