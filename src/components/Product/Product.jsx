import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

const Product = (props) => {
  const { img, name, seller, price, ratings } = props.product;

  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <h6 className="product-name">{name}</h6>
        <p>price : ${price}</p>
        <p>Manufacturer: {seller}</p>
        <p>Ratings : {ratings}</p>
      </div>
      <button
        onClick={() => props.handleAdd(props.product)}
        className="btn-cart"
      >
        <FontAwesomeIcon icon={faShoppingCart} />
        Add to cart
      </button>
    </div>
  );
};

export default Product;
