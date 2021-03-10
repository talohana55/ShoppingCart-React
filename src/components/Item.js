import React, { useContext } from "react";
import "./Item.css";
import { AppContext } from "../context/ContextProvider";
import { useHistory } from "react-router-dom";

const Item = ({ item }) => {
  let history = useHistory();
  const { addProduct, isLogged } = useContext(AppContext);
  return (
    <div class="flip-card">
      <div class="flip-card-inner">
        <div class="flip-card-front">
          <div>
            <img src={item.image} alt={item.image} className="card-img" />
          </div>

          <h6 className="card-title">{item.title}</h6>
        </div>
        <div class="flip-card-back">
          <p>{item.description}</p>
          <p style={{ fontSize: "15px" }}>Category: {item.category}</p>
          <p style={{ fontSize: "15px", color: "red" }}>Price: {item.price}$</p>

          <button
            className="card-button"
            onClick={(e) => {
              if (isLogged) {
                e.preventDefault();
                addProduct(item);
              } else {
                history.push("login");
              }
            }}
          >
            {isLogged ? "ADD TO CART" : "LOGIN TO START"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Item;
