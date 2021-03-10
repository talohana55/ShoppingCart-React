import React, { createContext, useState } from "react";
import axios from "axios";
export const AppContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userLoggedInfo, setUserLoggedInfo] = useState(null);
  const [product, setProducrts] = useState([]);
  const [photos, setPhotos] = useState([]);
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);
  const users = [
    { username: "niko1234", password: "programming" },
    { username: "talOhana", password: "programming" },
    { username: "anton666", password: "programming" },
  ];
  const getPhotos = async () => {
    try {
      await axios
        .get("https://fakestoreapi.com/products", {
          params: {
            _limit:30,
          },
        })
        .then((res) => {
          console.log(res.data);
          setLoading(false);
          setPhotos(res.data);
          setProducrts(res.data);
        });
    } catch (err) {
      console.log(err);
    }
  };
const addProduct = (product) => {
  let temp = cart;
  const findIfProductExists = temp.find((prod) => {
    return prod.id === product.id;
  });

  if (findIfProductExists) {
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === findIfProductExists.id) {
        let temptwo = temp[i];
        temptwo.quantity = temptwo.quantity += 1;
        temp[i] = temptwo;
        setCart(temp);
        break;
      }
    }
  } else {
    temp = [...cart, { id: product.id, quantity: 1, item: product }];
    setCart(temp);
  }
  };
  const removeProduct = (newCart) => {
    setCart(newCart);
}


  return (
    <AppContext.Provider
      value={{
        photos,
        getPhotos,
        loading,
        cart,
        addProduct,
        isLogged,
        userLoggedInfo,
        users,
        setUserLoggedInfo,
        setIsLogged,
        removeProduct,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;