import { ADD_TO_CART, REMOVE_FROM_CART } from './action';

const initialState = {
  cart: []
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
     case ADD_TO_CART:{
      const product = action.payload;
      const exists = state.cart.find(item => item.id === product.id);

      if (exists) {
        return {
          ...state,
          cart: state.cart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...product, quantity: 1 }]
        };
      }
    }
    




    case REMOVE_FROM_CART:
  const id = action.payload.id;
  const qty = action.payload.quantity || 1;
  const item = state.cart.find(i => i.id === id);

  if (!item) return state;

  if (item.quantity <= qty) {
    return {
      ...state,
      cart: state.cart.filter(i => i.id !== id)
    };
  } else {
    return {
      ...state,
      cart: state.cart.map(i => 
        i.id === id ? { ...i, quantity: i.quantity - qty } : i
      )
    };
  }


    default:
      return state;
  }
};

export default cartReducer;
