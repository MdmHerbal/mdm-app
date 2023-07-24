import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import {useParams} from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./index.css";
const ProductDetails = () => {
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const params = useParams();

  const getProduct = async () => {
    const {data} = await axios.get(
      `/api/v1/product/get-product/${params.slug}`
    );
    setProduct(data.product);
    console.log(data.product);
    getRelatedProducts(data.product.category._id);
  };

  const getRelatedProducts = async (cid) => {
    console.log(cid);
    try {
      console.log("first");
      const {data} = await axios.get(`/api/v1/product/related-products/${cid}`);
      console.log(data);
      setRelatedProducts(data.product);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
    // eslint-disable-next-line
  }, []);

  return (
    <Layout>
      <div className="row details-con">
        <div className="col-md-1"></div>
        <div className="col-md-5">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            alt={product.name}
            className="detail-card-img"
          />
        </div>
        <div className="col-md-5">
          <h1>Product Details</h1>
          <h6>{product.name}</h6>
          <h6>{product.description}</h6>
          <h6>{product.price}</h6>
          <div></div>
          <button className="btn btn-secondary">Add to cart</button>
        </div>
        <div className="col-md-1"></div>
      </div>
      <div>
        <p>Similar Product</p>
        <div className="products-list">
          {relatedProducts.map((each) => (
            <div key={each._id}>
              <div className="product-details-container">
                <NavLink to={`product/${each.slug}`} className="card">
                  <img
                    className="product--image"
                    src={`/api/v1/product/product-photo/${each._id}`}
                    alt={each.name}
                  />
                  <h2>{each.name}</h2>
                  <p className="price">{each.price}</p>
                  <button>Add to Cart</button>
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;
