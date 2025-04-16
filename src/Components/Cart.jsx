import React, { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { MdInventory } from "react-icons/md";

const Cart = () => {
  const products = [
    "Apple iPhone 14",
    "Samsung Galaxy S23",
    "Sony WH-1000XM5",
    "Dell XPS 13 Laptop",
    "Nintendo Switch OLED",
  ];
  const [cart, setCart] = useState(products);
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (event) => {
    setInputValue(event.target.value);
  };
  const submitHandler = () => {
    if (inputValue.trim() !== "") {
      setCart((previousProducts) => [...previousProducts, inputValue]);
      const cartContainer = document.querySelector(".cart-container");
      cartContainer.scrollTop = cartContainer.scrollHeight; // Scroll to the bottom of the cart
      setInputValue(""); // Clear the input field after adding the product
    }
  };
  return (
    <>
      <div className="cart-container">
        <h2 className="cartTitle">
          <FaShoppingCart style={{ marginRight: "10px" }} /> Cart
        </h2>
        <div className="cart-header">
          {cart.length > 0 && <h2>You have {cart.length} in your cart</h2>}
        </div>
        <div className="cart-products">
          <ul className="cart-list">
            <h3>Products in your cart</h3>
            {cart.map((product, index) => (
              <li key={index}>
                <MdInventory /> {product}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="inputNewCart">
        <input
          type="text"
          value={inputValue}
          placeholder="Add New Prodcut"
          onChange={inputHandler}
        />
        <button onClick={submitHandler}>Submit</button>
      </div>
    </>
  );
};

export default Cart;
