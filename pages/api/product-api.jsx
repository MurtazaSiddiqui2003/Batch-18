import { useEffect, useState } from "react";
import axios from "axios";
import Card from "../../src/components/card/card";
import './style.css'

const ProductApi = () => {
  const [products, setProducts] = useState([]);
  const [categoryList, setCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(""); //

  // get, post, put, patch, delete

  const getApiData = async () => {
    // https://dummyjson.com/products/category/smartphones
    try {
      const apiRes = await axios.get(
        `https://dummyjson.com/products${selectedCategory ? `/category/${selectedCategory}` : ""
        }`
      ); // intezaar krta hai response aane ka
      console.log(apiRes.data);
      setProducts(apiRes.data.products);
    } catch (error) {
      console.log("Err", error);
    }
  };

  const getCategories = async () => {
    try {
      const catData = await axios.get(
        "https://dummyjson.com/products/category-list"
      );
      console.log(catData)
      setCategoryList(catData.data);
    } catch (error) {
      console.log("Err", error);
    }
  };

  useEffect(() => {
    getApiData();
  }, [selectedCategory]);

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="productApi">
      <div className="filterBar">
        <div>
        <h6>Search By Category</h6>
        <select
          value={selectedCategory} //""
          onChange={(event) => {
            setSelectedCategory(event.target.value);
          }}
        >
          <option value="/">All</option>
          {categoryList.map((eachCategory) => {
            return (
              <option key={eachCategory} value={eachCategory}>
                {eachCategory}
              </option>
            );
          })}
        </select>
        </div>

        <button
          onClick={() => {
            setSelectedCategory("");
          }}
        >
          Clear Filter
        </button>
      </div>
      <div className="products">

        {products.map((eachProduct) => {
          return <Card key={eachProduct.id} product={eachProduct} />;
        })}
      </div>
    </div>
  );
}

export default ProductApi;

// Mount
// Update
// Unmount