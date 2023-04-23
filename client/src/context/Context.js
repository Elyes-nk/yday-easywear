import { createContext, useState, useEffect } from "react";

const Context = createContext({
  user: null,
  cart: [],
  removeItem: () => {},
  addItem: () => {},
  clearCart: () => {},
  total: 0,
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("user"))
      : null
  );

  const [cart, setCart] = useState(
    typeof window !== "undefined"
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );

  const [total, setTotal] = useState(
    cart ? cart.reduce((prev, item) => prev + item.amount, 0) : 0
  );

  const addItem = (product) => {
    const itemAded =
      cart && cart.find((item) => item.product.title === product.title);
    if (itemAded) {
      const cartFiltred = cart.filter(
        (item) => item.product.title !== product.title
      );
      setCart([...cartFiltred, { product, amount: itemAded.amount + 1 }]);
    } else {
      if (cart) {
        setCart([...cart, { product, amount: 1 }]);
      } else {
        setCart([{ product, amount: 1 }]);
      }
    }
  };

  const deductItem = (product) => {
    const itemAded =
      cart && cart.find((item) => item.product.title === product.title);
    if (itemAded) {
      const cartFiltred = cart.filter(
        (item) => item.product.title !== product.title
      );
      itemAded.amount > 1
        ? setCart([...cartFiltred, { product, amount: itemAded.amount - 1 }])
        : removeItem(itemAded.product.id);
    }
  };

  const removeItem = (id) => {
    const cartFiltred = cart.filter((item) => item.product.id !== id);
    setCart(cartFiltred);
  };

  const clearCart = () => {
    setCart([]);
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
    setTotal(cart ? cart.reduce((prev, item) => prev + item.amount, 0) : 0);
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);

  const context = {
    cart,
    addItem,
    deductItem,
    clearCart,
    removeItem,
    total,
    user,
    setUser,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export default Context;
