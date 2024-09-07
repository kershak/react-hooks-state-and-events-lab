import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleInCartClick(){
    setIsInCart((isInCart) => !isInCart);
  }

  return (
    <li className={isInCart ? "in-cart": ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button 
          onClick={handleInCartClick}
          className={isInCart ? "remove": "add"}>
            {isInCart ? "Remove From" : "Add to"} Cart</button>
    </li>
  );
}

export default Item;
