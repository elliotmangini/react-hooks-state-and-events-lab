import React, { useState } from "react";

function Item({ name, category }) {

  const [ isInCart, setisInCart ] = useState(false);

  function handleCart () {
    setisInCart(isInCart => !isInCart);
  }

  const determineClass = isInCart ? "in-cart" : "";


  return (
    <li className={determineClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCart}>{!isInCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
