import React from 'react'
import { useCart } from '../context/CartContext'
import './cartfun.css';

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalPrice } = useCart()
    
  return (
    <div>
      <h2>🛒 Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, idx) => (
              <li key={idx} className='cart-display'>
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <br />{item.name} <br /> {item.price} <br />
                <button onClick={() => removeFromCart(item.id)} className='btn'>Remove</button>
              </li>
            ))}
          </ul>
          <div className="total-price">
            <h3>Total Price: ${totalPrice}</h3>
          </div>
          <br />
          <button onClick={clearCart} className='btn'>Clear Cart</button>
          <button className='btn'>Buy now</button>
        </>
      )}
    </div>
  )
}

export default Cart
