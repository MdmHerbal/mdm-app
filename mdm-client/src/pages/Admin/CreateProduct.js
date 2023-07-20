import React, {useState, useEffect} from "react";
import Layout from "../../components/Layout/Layout";
import AdminMenu from "../../components/Layout/AdminMenu";
import axios from "axios";
import toast from "react-hot-toast";
import {Select} from "antd";
import {useNavigate} from "react-router-dom";
const {Option} = Select;

const CreateProduct = () => {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Select a category");
  const [quantity, setQuantity] = useState("");
  const [photo, setPhoto] = useState("");

  const navigate = useNavigate();

  const getAllcategories = async () => {
    try {
      const categories = await axios.get("/api/v1/category/get-category");
      if (categories.data.success) {
        setCategories(categories.data.category);
      } else {
        toast.success(categories.data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllcategories();
  }, []);

  const onClickCreateProduct = async () => {
    const productData = new FormData();
    productData.append("name", name);
    productData.append("description", description);
    productData.append("price", price);
    productData.append("category", category);
    productData.append("quantity", quantity);
    productData.append("photo", photo);
    try {
      const {data} = await axios.post(
        "/api/v1/product/create-product",
        productData
      );
      if (data.success) {
        toast.success(data.message);
        navigate("/dashboard/admin/products");
      } else {
        toast.success(data.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout title={"Dashboard - Create Product"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9 p-3 ">
            <h2>CreateProduct</h2>
            <div className="m-1 w-75 border border-primary p-1 ">
              <Select
                bordered={false}
                placeholder="Select a category"
                size="large"
                showSearch
                className="form-select mb-3"
                onChange={(val) => {
                  setCategory(val);
                }}
                value={category}>
                {categories.map((c) => (
                  <Option key={c._id} value={c._id}>
                    {c.name}{" "}
                  </Option>
                ))}{" "}
              </Select>

              <div className="mb-2">
                <label className="btn btn-outline-primary col-md-12">
                  {photo ? photo.name : "Upload Photo"}
                  <input
                    type="file"
                    name="photo"
                    accept="image/*"
                    hidden
                    onChange={(e) => setPhoto(e.target.files[0])}
                  />
                </label>
              </div>
              <div className="d-flex justify-content-center">
                {photo && (
                  <img
                    src={URL.createObjectURL(photo)}
                    alt="product_photo"
                    height={"200px"}
                  />
                )}{" "}
              </div>

              <div className="mb-2">
                <input
                  type="text"
                  className="col-md-12 p-1"
                  placeholder="Enter Product Name"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                />
              </div>
              <div className="mb-2 ">
                <textarea
                  type="text"
                  className="col-md-12 p-1"
                  placeholder="Enter Product Description"
                  onChange={(e) => setDescription(e.target.value)}
                  value={description}
                />
              </div>
              <div className="mb-2">
                <input
                  type="number"
                  className="col-md-12 p-1"
                  placeholder="Enter Product price"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                />
              </div>
              <div className="mb-2">
                <input
                  type="numbers"
                  className="col-md-12 p-1"
                  placeholder="Enter Product quantity"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                />
              </div>
              <div className="mb-2">
                <Select className="col-md-12" placeholder="Select a Shipping">
                  <Option value="0">Yes</Option>
                  <Option value="1">No</Option>
                </Select>
              </div>
              <div className="mb-2">
                <button
                  className="btn btn-primary"
                  onClick={onClickCreateProduct}>
                  Create Product
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateProduct;
