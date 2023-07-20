import React from "react";
import Layout from "../../components/Layout/Layout";
import {useSearch} from "../../context/search";
import "./index.css";

const Search = () => {
  const [value, setValue] = useSearch();
  return (
    <Layout title={"Search results"}>
      {value.results.length < 1
        ? "No Results Found"
        : `Found ${value.results.length}`}
      <div className="d-flex flex-wrap">
        {value.results.map((each) => (
          <div key={each._id}>
            <div className="product-details-container">
              <div className="card">
                <img
                  className="product--image"
                  src={`/api/v1/product/product-photo/${each._id}`}
                  alt={each.name}
                />
                <h2>{each.name}</h2>
                <p className="price">{each.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Search;
