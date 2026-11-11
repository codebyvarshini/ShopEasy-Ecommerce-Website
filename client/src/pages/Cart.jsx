import { useContext } from "react";
import { CartContext } from "../Context/CartContext";

function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-page">
      <h1>🛒 My Cart</h1>

      {cart.length === 0 ? (
        <h2>Your cart is empty</h2>
      ) : (
        <>
          {cart.map((item, index) => (
            <div className="cart-item" key={index}>
              <img src={item.image} alt={item.name} />

              <div>
                <h3>{item.name}</h3>
                <p>₹{item.price}</p>
              </div>

              <button onClick={() => removeFromCart(index)}>
                Remove
              </button>
            </div>
          ))}

          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;