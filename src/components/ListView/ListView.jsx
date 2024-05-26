import React from 'react';
import ShopItem from '../ShopItem/ShopItem';

export default function ListView(props) {

  const { products } = props;

  return(
    <div className = "list-view">
      {products.map(product => {
        return (
          <ShopItem product = {product}/>
        )
      })}
    </div>
  )

}
