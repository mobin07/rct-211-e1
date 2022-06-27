import React from "react";
import "./ShoeCard.css"

const ShoeCard = ({shoe}) => {
  console.log(shoe)
  const shoeId = null;
  return (
    <div data-cy={`shoe-card-wrapper-${shoeId}`} className="main">
      <img data-cy="shoe-card-image" alt="shoe" src={shoe.image} className="img"/>
      <div>
        <div data-cy="shoe-name">{shoe.name}</div>
        <div className="mobin">
          In Cart:
          <div data-cy="shoe-count">{shoe.cart_quantity}</div>
          <button data-cy="increment-shoe-count-button">+</button>
          <button data-cy="decrement-shoe-count-button">-</button>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
