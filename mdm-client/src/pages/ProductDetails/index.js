import React, {useEffect, useState} from "react";
import Layout from "../../components/Layout/Layout";
import axios from "axios";
import {useParams} from "react-router-dom";
import {NavLink} from "react-router-dom";
import "./index.css";
const ProductDetails = () => {
  const params = useParams();
  const [product, setProduct] = useState({});
  const [relatedProducts, setRelatedProducts] = useState([]);
  const [bulletPoints, setBulletPoints] = useState([]);
  const bulletPointsArray =
    bulletPoints.length > 0 ? bulletPoints[0].split(",") : [];
  // const points = JSON.parse(product.description);
  // console.log(bulletPoints);
  // useEffect(() => {
  //   getProduct();
  //   console.log(JSON.parse(product.description[0]));
  //   // eslint-disable-next-line
  // }, []);

  useEffect(() => {
    if (params?.slug) getProduct();
  }, [params?.slug]);

  const getProduct = async () => {
    const {data} = await axios.get(
      `/api/v1/product/get-product/${params.slug}`
    );
    console.log(data?.product.description);
    setProduct(data?.product);
    setBulletPoints(data?.product.description);
    getRelatedProducts(data?.product.category._id);
    // getSimilarProduct(data?.product._id, data?.product.category._id);
  };

  const getRelatedProducts = async (cid) => {
    try {
      const {data} = await axios.get(`/api/v1/product/related-products/${cid}`);
      const filteredProducts = data.product.filter(
        (product) => product.slug !== params.slug
      );
      setRelatedProducts(filteredProducts);
      console.log(data?.product);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Layout>
      <div className="details-con">
        <div className="details-con-box-1">
          <img
            src={`/api/v1/product/product-photo/${product._id}`}
            alt={product.name}
            className="detail-card-img"
          />
        </div>
        <div className="details-con-box-2">
          <h1>Product Details</h1>
          <ul>
            {bulletPointsArray.map((bulletPoint, index) => (
              <li key={index}>{bulletPoint}</li>
            ))}
          </ul>
          <h6>{product.name}</h6>
          <h6>{product.price}</h6>
          <div></div>
          <button className="btn btn-secondary">Add to cart</button>
        </div>
      </div>

      <div>
        <h2>Similar Products</h2>
        <div className="products-list">
          {relatedProducts.map((each) => (
            <div key={each._id}>
              <div className="product-details-container">
                <NavLink to={`product/${each.slug}`} className="product-card">
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

// <ul>
// {JSON.parse(product.description[0]).map((item, index) => (
//   <li key={index}>{item}</li>
// ))}
// </ul>
