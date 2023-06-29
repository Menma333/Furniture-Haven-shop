import React, { useState } from 'react';
import { BiCartDownload } from "react-icons/bi";
import Order from './Order';

const showOrders = (props) => {
  return (
    <div>
      {props.orders.map(el => (
        <Order onDelete={props.onDelete} key={el.id} item={el} />
      ))}
    </div>
  );
};

const showNothing = () => {
  return (
    <div className='empty'>
      <h2>Cart is empty</h2>
    </div>
  );
};

export default function Header(props) {
  let [cartOpen, setCartOpen] = useState(false);

  return (
    <header className='header'>
      <div>
        <span className='logo'>Furniture Haven</span>
        <ul className='nav'>
          <li>About us</li>
          <li>Contacts</li>
          <li>Cabinet</li>
        </ul>
        <BiCartDownload onClick={() => setCartOpen(!cartOpen)} className={`shop-cart-button ${cartOpen && 'active'}`} />

        {cartOpen && (
          <div className='shop-cart'>
            {props.orders.length > 0 ?
              showOrders(props) : showNothing()}
          </div>
        )}
      </div>
      <div className='presentation'></div>
    </header>
  );
}
