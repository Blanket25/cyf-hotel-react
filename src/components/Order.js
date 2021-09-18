import React, { useState } from "react";

const RestaurantButton = props => (
  <button onClick={props.handleClick} className="btn btn-primary">
    Add
  </button>
);

const Order = props => {
  const [orders, setOrders] = useState(0);

  const orderOne = () => {
    setOrders(orders + 1);
  };
  return (
    <li>
      {props.orderType}: {orders} <RestaurantButton handleClick={orderOne} />
    </li>
  );
};

export default Order;
