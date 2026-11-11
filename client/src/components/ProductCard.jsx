import { useContext } from "react";
import { Link } from "react-router-dom";

import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";

function ProductCard({
  id,
  image,
  name,
  price,
  rating,
  discount,
}) {
  const { addToCart } = useContext(CartContext);
  const { addToWishlist } = useContext(WishlistContext);

  const product = {
    id,
    image,
    name,
    price,
    rating,
    discount,
  };

  return (
    <div className="card">
      <img src={image} alt={name} />

      {/* Discount Badge */}
      <div className="discount-badge">
        {discount}
      </div>

      <h3>{name}</h3>

      <p className="price">₹{price}</p>

      {/* Rating */}
      <p className="rating">
        ⭐ {rating} / 5
      </p>

      <button onClick={() => addToCart(product)}>
        🛒 Add to Cart
      </button>

      <button onClick={() => addToWishlist(product)}>
        ❤️ Wishlist
      </button>

      <Link to={`/product/${id}`}>
        <button>
          👀 View Details
        </button>
      </Link>
    </div>
  );
}

export default ProductCard;