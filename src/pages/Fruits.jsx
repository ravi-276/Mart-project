import React from 'react'
import { fruits } from '../components/assets/data'
import { useCart } from '../context/CartContext'
import './productsicon.css'
const Fruits = () => {
  const { addToCart } = useCart()
 return (
    <div className="grocery-container">
      <h1 className="grocery-title">{fruits.title}</h1>
      <div className="grocery-list">
        {fruits.items.map((item) => (
          <div key={item.id} className="grocery-item">
            <img
              src={item.image}
              alt={item.name}
            />
            <h4>{item.name}</h4>
            <p>{item.price}</p>
            <button onClick={()=>addToCart(item)}>Add</button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Fruits
