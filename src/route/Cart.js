import React, { useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import CartItem from "../components/CartItem";
import { AppContext } from "../context/ContextProvider";

const Cart = () => {
  const { cart, setCart, removeitemFromCart } = useContext(AppContext);

  const getTotalCartSum = () => {
    let total2 = 0;
    for (let i = 0; i < cart.length; i++) {
      total2 += cart[i].item.price * cart[i].quantity;
    }
    return total2.toFixed(2);
  };

  

  useEffect(() => {}, [cart]);
  return (
    <div className="container" style={{ margin: "5rem 0px 0px 10rem" }}>
      <div className="row">
        <div className="col-sm-12 col-md-10 col-md-offset-1">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>Product</th>
                <th>Quantity</th>
                <th className="text-center">Price</th>
                <th className="text-center">Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item, i) => {
                return <CartItem item={item} key={i} />;
              })}

              <tr>
                <td>   </td>
                <td>   </td>
                <td>   </td>
                <td>
                  <h3>Total</h3>
                </td>
                <td className="text-right">
                  <h3>
                    <strong>{getTotalCartSum()}$</strong>
                  </h3>
                </td>
              </tr>
              <tr>
                <td>   </td>
                <td>  </td>
                <td>   </td>
                <td>
                  <NavLink to="/">
                    <button
                      type="button"
                      className="btn btn-success"
                      style={{ backgroundColor: "blue" }}
                    >
                      <span className="glyphicon glyphicon-shopping-cart"></span>
                      Continue Shopping
                    </button>
                  </NavLink>
                </td>
                <td>
                  <button type="button" className="btn btn-success">
                    Checkout <span className="glyphicon glyphicon-play"></span>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cart;
