import React, { useState } from "react";

function Item({ name, category }) {
  // Add state to track if this item is in the cart
  const [isInCart, setIsInCart] = useState(false);

  // Function to toggle cart state
  function handleAddToCartClick() {
    setIsInCart((inCart) => !inCart); // Toggle true/false
  }

  // Change className and button text based on isInCart
  const liClass = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove From Cart" : "Add to Cart";

  return (
    <li className={liClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCartClick}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
