import { Link } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "../Context/CartContext";
import { WishlistContext } from "../Context/WishlistContext";

function Navbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <nav className="navbar">
      <h2>🛍️ ShopEasy</h2>

      <div className="nav-links">
        <Link to="/">Home</Link>

        <Link to="/products">Products</Link>
        <Link to="/cart">
  🛒 Cart ({cart.length})
</Link>

<Link to="/wishlist">
  ❤️ Wishlist ({wishlist.length})
</Link>

      

     

        {user ? (
          <>
            <span className="welcome-text">
              👋 Hi, {user.name}
            </span>

            <button className="logout-btn" onClick={handleLogout}>
              Logout
            </button>
          </>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </nav>
  );
}

export default Navbar;