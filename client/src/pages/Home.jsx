import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";


function Home() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="home">

      {/* ================= Hero Banner ================= */}

      <div className="hero-banner">
        <div className="hero-content">
          <h1>🛍 ShopEasy</h1>

          <p>Your One-Stop Online Shopping Destination</p>

          <h2>🔥 Flat 50% OFF on Electronics</h2>

          <button>Shop Now</button>
        </div>

        <div className="hero-image">
          <img
            src="https://cdn-icons-png.flaticon.com/512/891/891462.png"
            alt="Shopping"
          />
        </div>
      </div>

      {/* ================= Categories ================= */}

      <h2 className="section-title">🛒 Shop by Category</h2>

      <div className="categories">

        <div className="category-card">
          📱
          <p>Mobiles</p>
        </div>

        <div className="category-card">
          💻
          <p>Laptops</p>
        </div>

        <div className="category-card">
          ⌚
          <p>Watches</p>
        </div>

        <div className="category-card">
          🎧
          <p>Headphones</p>
        </div>

      </div>

      {/* ================= Search ================= */}

      <input
        type="text"
        placeholder="🔍 Search Products..."
        className="search-box"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* ================= Products ================= */}

      <h2 className="section-title">🔥 Featured Products</h2>

      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
          <ProductCard
              key={product.id}
              id={product.id}
              image={product.image}
              name={product.name}
              price={product.price}
              rating={product.rating}
              discount={product.discount}
        />
          ))
        ) : (
          <h2>No Products Found</h2>
        )}
      </div>

      {/* ================= Features ================= */}

      <h2 className="section-title">⭐ Why Choose ShopEasy?</h2>

      <div className="features">

        <div className="feature-card">
          <div className="feature-icon">🚚</div>
          <h3>Fast Delivery</h3>
          <p>Delivery within 24 Hours</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔒</div>
          <h3>Secure Payment</h3>
          <p>100% Safe & Secure Payments</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">💯</div>
          <h3>Original Products</h3>
          <p>Trusted Brands Only</p>
        </div>

        <div className="feature-card">
          <div className="feature-icon">🔄</div>
          <h3>Easy Returns</h3>
          <p>7 Days Easy Return Policy</p>
        </div>

      </div>

    </div>
  );
}

export default Home;