const Reducer = (cart = [], action) => {
    if (action.type === "ADD") {
      let tempcart = cart.filter((productItem) => productItem.id === action.payload.id);
      if (tempcart < 1) {
        return [...cart, action.payload];
      } else {
        return cart;
      }
    }
    if (action.type === "REMOVE") {
      return cart.filter((productItem) => productItem.id !== action.payload.id);
    }
    if (action.type === "INCREASE") {
      let tempcart = cart.map((productItem) => {
        if (productItem.id === action.payload.id) {
          return { ...productItem, quantity: productItem.quantity + 1 };
        }
        return productItem;
      });
      return tempcart;
    }
    if (action.type === "DECREASE") {
      let tempcart = cart.map((productItem) => {
        if (productItem.id === action.payload.id) {
          return { ...productItem, quantity: productItem.quantity - 1 };
        }
        return productItem;
      });
      return tempcart;
    }
    if (action.type === "CLEAR"){
      return window.location.reload()
    }
   
    return cart;
  };
  export default Reducer;