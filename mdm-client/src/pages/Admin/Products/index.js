import "./index.css";
import React, {useState, useEffect} from "react";
import Layout from "../../../components/Layout/Layout";
import AdminMenu from "../../../components/Layout/AdminMenu";
import axios from "axios";

const Products = () => {
  const [products, setProducts] = useState([]);

  const getAllProducts = async () => {
    try {
      const {data} = await axios.get("/api/v1/product/get-products");
      console.log(data);
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);
    }
  };

  // life cycle method
  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Layout title={"Dashboard - Orders"}>
      <div className="container-fluid m-3 p-3 dashboard">
        <div className="row">
          <div className="col-md-3">
            <AdminMenu />
          </div>
          <div className="col-md-9">
            <h2>All Products in Dashboard</h2>
            <div className="products-con">
              {products.map((each) => (
                <ul key={each._id} className="admin-product-card-con">
                  <li>
                    <div>
                      <img
                        src={`/api/v1/product/product-photo/${each._id}`}
                        alt={each.name}
                        className="product-img"
                      />
                    </div>
                    <div>
                      <h5>{each.name}</h5>
                      <h5>{each.description}</h5>
                    </div>
                    <div className="d-flex justify-content-center">
                      <button className="btn btn-primary m-2">
                        Add to card
                      </button>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Products;
