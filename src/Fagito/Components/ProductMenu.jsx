import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { API_URl } from "../API_Integration/data";
import Navbar from "./Navbar";
const ProductMenu = () => {
  const [Products, setproducts] = useState([]);
  const { firmId,Restaurant_Name } = useParams();
  const productHandler = async () => {
    try {
      const res = await fetch(`${API_URl}/product/${firmId}/get-products`);
      const data = await res.json();
      setproducts(data.products);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    productHandler();
  }, []);
  return (
    <>
      <Navbar />
      <section className="productsec">
        <h3 className="restname">{Restaurant_Name}</h3>
        {Products.map((item) => {
          return (
            <div className="myproducts" key={item._id}>
              <div>
                {item.bestseller==="Yes" ? <div className="best">Bestseller</div> :" "}
                <div className="productname">{item.productName}</div>
                <div className="price">{item.price}</div>
                <p className="description"> {item.description}</p>
              </div>
              <div className="productItems">
                <img
                  src={`${API_URl}/uploads/${item.productImage}`}
                  alt={item.productImage}
                />
                <div className="additem">ADD</div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductMenu;
