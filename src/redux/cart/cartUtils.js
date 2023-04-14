export const addItemToCart = (cartItems, cartItemsToAdd) => {
  if (!Array.isArray(cartItems)) {
    cartItems = [];
  }

  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemsToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((item) => {
      return item.id === cartItemsToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item;
    });
  }

  return [...cartItems, { ...cartItemsToAdd, quantity: 1 }];
};

//
export const remvItemToCart = (cartItems, cartItemsToRemv) => {
  const existingCartItem = cartItems.find(
    (item) => item.id === cartItemsToRemv.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((item) => item.id !== cartItemsToRemv.id);
  }

  return cartItems.map((item) => {
    return item.id === cartItemsToRemv.id
      ? { ...item, quantity: item.quantity - 1 }
      : item;
  });
};
