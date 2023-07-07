import React, { useState, useEffect } from 'react';
import "../Style/shopping.css"


function ShoppingCart() {
  const [cartItems, setCartItems] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.log(error);
    }
  };

  // const addItemToCart = (item) => {
  //   setCartItems([...cartItems, item]);
  // };
  const addItemToCart = (item) => {
    const existingItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.id === item.id
    );
  
    if (existingItemIndex !== -1) {
      const updatedCartItems = [...cartItems];
      updatedCartItems[existingItemIndex].quantity += 1;
      setCartItems(updatedCartItems);
    } else {
      setCartItems([...cartItems, { ...item, quantity: 1 }]);
    }
  };
  

  const removeItemFromCart = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
  };

  useEffect(() => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;;
    });
    setSubtotal(total);
  }, [cartItems]);

  return (
    <div className='shop'>
<div className='head'>
<h1>Shopping Cart</h1>
</div>
      
      <div className='flex'>
      <div className='items'>
        <h2>Items</h2>
        <ul>
          {items.map((item) => (
            <li key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.name} - ${item.price}</p>
              
              <button onClick={() => addItemToCart(item)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <div className='cart'>
        <h2>Cart</h2>
        <ul>
          
          {cartItems.map((item, index) => (
  <li key={index}>
     <h3>{item.title}</h3>
    <p> {item.name} - ${item.price} (Quantity: {item.quantity})</p>
   
    <button onClick={() => removeItemFromCart(index)}>
      Remove from Cart
    </button>
  </li>
))}
        </ul>
        <p>Total Items: {cartItems.length}</p>
        <p>Subtotal: ${subtotal}</p>
      </div>
      </div>
    </div>
  );
}


export default ShoppingCart;
