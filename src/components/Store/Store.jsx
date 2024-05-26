import React from 'react';
import IconSwitch from '../IconSwitch/IconSwitch';
import { useState } from 'react';
import CardsView from '../CardsView/CardsView';
import ListView from '../ListView/ListView';

export default function Store() {

  const products = [{
    name: "Nike Metcon 2",
    price: "130",
    color: "red",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "blue",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
  }, {
    name: "Nike Metcon 2",
    price: "130",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
  }, {
    name: "Nike free run",
    price: "170",
    color: "black",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
  }, {
    name: "Nike Metcon 3",
    price: "150",
    color: "green",
    img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
  }];

  const [icon, setIcon] = useState('view_module');
  const [showListView, setShowListView] = useState(false);
  const [showCardsView, setShowCardsView] = useState(true);

  const onSwitch = () => {
    setIcon(
      icon === 'view_list' ? 'view_module' : 'view_list'
    );
    setShowListView(p => !p);
    setShowCardsView(p => !p);
  }
  
  return (
    <div classMame = "container">
      <div className = "icon">
        <IconSwitch 
          icon = {icon}
          onSwitch = {onSwitch}
        />
      </div>

      { showListView && 
        <div className = "lists-view">
          <ListView products = {products}/>
        </div> 
      }

      { showCardsView && 
        <div className = "cards-view">
          <CardsView products = {products}/>
        </div> 
      }
      
    </div>
  )
}
