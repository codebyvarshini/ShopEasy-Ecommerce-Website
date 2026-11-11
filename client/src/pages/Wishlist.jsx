import { useContext } from "react";
import { WishlistContext } from "../Context/WishlistContext";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  return (
    <div className="wishlist-page">
      <h1>❤️ My Wishlist</h1>

      {wishlist.length === 0 ? (
        <h2>No Products in Wishlist</h2>
      ) : (
        wishlist.map((item) => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.name} />

            <div>
              <h3>{item.name}</h3>
              <p>₹{item.price}</p>
            </div>

            <button onClick={() => removeFromWishlist(item.id)}>
              Remove
            </button>
          </div>
        ))
      )}
    </div>
  );
}

export default Wishlist;