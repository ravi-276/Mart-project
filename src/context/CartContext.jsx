import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext()

export const useCart = () => {
  return useContext(CartContext)
}

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([])
  const addToCart = (item) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(cartItem => cartItem.id === item.id)
      if (existingItem) {
        return prevItems.map(cartItem =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      } else {
        return [...prevItems, { ...item, quantity: 1 }]
      }
    })
  }
  const removeFromCart = (id) => {
    setCartItems(prevItems =>
      prevItems
        .map(item =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }
  const clearCart = () => {
    setCartItems([])
  }
  const totalPrice = cartItems.reduce((total, item) => {
    let price = item.price
    if (typeof price === 'string') {
      price = parseFloat(price.replace('₹', '').replace('/-', '').trim())
    }
    price = isNaN(price) ? 0 : price
    return total + price * item.quantity
  }, 0).toFixed(2)
  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, removeFromCart, clearCart, totalPrice, cartCount }}
    >
      {children}
    </CartContext.Provider>
  )
}
