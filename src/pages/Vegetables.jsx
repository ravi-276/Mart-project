import React from 'react'

import { vegetables } from '../components/assets/data'
import { useCart } from '../context/CartContext'
import './productsicon.css'
const Vegetables = () => {
  const { addToCart } = useCart()
  return (
     <div className="grocery-container">
       <h1 className="grocery-title">{vegetables.title}</h1>
       <div className="grocery-list">
         {vegetables.items.map((item) => (
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
 

export default Vegetables
