import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../new_redux/action";

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart);

  
  let totalItems = 0;
let totalCost = 0;

for (const item of cartItems) {
  totalItems += item.quantity;
  totalCost += item.price * item.quantity;
}


  return (
    <div>
      <h2>Your Cart</h2>

      {cartItems.length === 0 && <p>Your cart is currently empty.</p>}

      <ul>
        {cartItems.map((item, index) => (
          <li key={index}>
            {item.name} &times; {item.quantity}: {item.price} Rupees
            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      {cartItems.length > 0 && (
        <div>
          <p>Total items: {totalItems}</p>
          <p>Total cost: {totalCost} Rupees</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
