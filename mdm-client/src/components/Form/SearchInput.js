import React from "react";
import {useSearch} from "../../context/search";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const SearchInput = () => {
  const [value, setValue] = useSearch();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const {data} = await axios.get(`/api/v1/product/search/${value.keyword}`);
      setValue({...value, results: data});
      navigate("/search");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form className="d-flex" role="search" onSubmit={handleSubmit}>
        <input
          class="form-control me-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={(e) => setValue({...value, keyword: e.target.value})}
        />
        <button class="btn btn-outline-success h-20" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
