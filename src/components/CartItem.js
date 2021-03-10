import React, { useContext, useEffect } from "react";
import { AppContext } from "../context/ContextProvider";
const CartItem = ({ item, i }) => {
  const { cart, setCart, removeProduct } = useContext(AppContext);

  const getTotal = (a, b) => {
    return a * b;
  };
  const removeitemFromCart = (e) => {
    debugger;
    let temp = [...cart];
    const item = e.target.value; /// get the index of specific value to remove
    let index;
    for (let i = 0; i < temp.length; i++) {
      if (item === temp[i].item.id) {
        index = temp[i].item.id;
      }
    }
    console.log(item);
    console.log(index);
    if (index !== -1) {
      temp.splice(index, 1);
      removeProduct(temp);
      console.table(cart);
    } else {
      temp = [];
      setCart(temp);
      console.table(cart);
    }
  };
  

useEffect(() => {
  
}, [cart])
  return (
    <tr>
      <td className="col-sm-8 col-md-6">
        <div
          className="media"
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <img
            className="media-object"
            src={item.item.image}
            alt={item.item.image}
            style={{ width: "82px", height: "82px" }}
          />

          <div className="media-body">
            <h6 className="media-heading">{item.item.title}</h6>

            <span>Status: Available </span>
            <span className="text-success">
              <strong>In Stock</strong>
            </span>
          </div>
        </div>
      </td>
      <div
        style={{
          textAlign: "center",
          width: "2rem",
          border: "2px solid grey",
          borderRadius: "3px",
        }}
      >
        {item.quantity}
      </div>
      <td className="col-sm-1 col-md-1 text-center">
        <strong>${item.item.price}</strong>
      </td>
      <td className="col-sm-1 col-md-1 text-center">
        <strong>${getTotal(item.quantity, item.item.price)}</strong>
      </td>
      <td className="col-sm-1 col-md-1">
        <button
          type="button"
          className="btn btn-danger"         
          value={item.item.id}
          onClick={removeitemFromCart}
        >
          <span className="glyphicon glyphicon-remove">Remove</span>
        </button>
      </td>
    </tr>
  );
};

export default CartItem;
