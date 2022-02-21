import React, { useState } from "react";
import "./Cart.css";
import arrow from '../images/arrow.png'
import { products } from "./Product";
import cart from '../images/cart.png'
import Item from "./Item";


const Cart = () => {
    const [item, setItem]=useState(products)
  return (
    <>
      <header>
        <div className="continue-shopping">
          <img src={arrow} alt="arrow" className="arrow-icon"/>
            <h3>Continue Shopping</h3>
        </div>
        <div className="cart-icon">
            <img src={cart} alt="cart" />
            <p>7</p>
        </div>
      </header>
      <section className="main-cart-section">
          <h1>shopping Cart</h1>
          <p className="total-items">You have <span className="total-item-count">7</span>item</p>
           <div className="cart-items-container">
                {
                    item.map((curItem)=>{
                        return   <Item key={curItem.id}{...curItem}></Item>
                    })
                }
             
           </div>
            <div className="card-total">
                <h3>Cart Total : <span>2200rs</span></h3>
                <button>CheckOut</button>
            </div>
      </section>
    </>
  );
};

export default Cart;
