import React from 'react';
import ShopCard from '../ShopCard/ShopCard';

export default function CardsView(props) {

  const { products } = props;

  return (
    <div className = "card-view">
      {products.map(product => {
        return (
          <ShopCard product = {product}/>
        )
      })}
    </div>

  )
}
