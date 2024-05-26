import React from 'react'

export default function ShopItem(props) {

  const { product } = props;

  return (
    <div className = "card-item">
      <img 
        className = "img-item"
        src = {product.img}
        alt = {product.name}
      />
      <h2 className = "title-item">
        {product.name}
      </h2>
      <p className = "color-item">
        {product.color}
      </p>
      <div className = "prise-item">
        {product.price}
      </div>
      <button className = "item-btn">
          add to cart
      </button>
    </div>
  )
}
