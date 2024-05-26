import React from 'react'

export default function ShopCard(props) {
  const { product } = props;
  
  return (
    <div className = "card-container">
      <h2 className = "title-card">
        {product.name}
      </h2>
      <p className = "color-card">
        {product.color}
      </p>
      <img 
        className = "img-card"
        src = {product.img}
        alt = {product.name}
      />
      <div className = "price-container">
        <div className = "prise-card">
          {'$' + product.price}
        </div>
        <button className = "card-btn">
          add to cart
        </button>
      </div>
    </div>

  )
}
