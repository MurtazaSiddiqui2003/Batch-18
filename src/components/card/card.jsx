import React from "react";
import './card.css'

const Card = (props) => {
  const { product } = props;

  const discountedPrice = (
    product.price -
    (product.price * product.discountPercentage) / 100
  ).toFixed(2);

  return (
    <div className="card">
      <div className="card-inner">
        <div className="cardimage">
        <img src={product.thumbnail} alt={product.title} className="card-img" />
        </div>
        <div className="card-body">
          <div className="name-brand">
            <h2 className="title">{product.title}</h2>
            <p className="brand">{product.brand}</p>
          </div>
          <div className="description">
            <p className="description">{product.description}</p>
          </div>
          <div className="price-rating">
            <span className="price">${discountedPrice}</span>
            <span className="rating">⭐ {product.rating}</span>
          </div>
          <div className="stock-cart">
            <span className="stock">Stock Left: {product.stock}</span>
            <button className="a2c-btn">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Card;