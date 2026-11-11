const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Products Data

  const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    rating: 4.8,
    discount: "50% OFF",
    image:
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400",
  },
  {
    id: 2,
    name: "Gaming Laptop",
    price: 59999,
    rating: 4.9,
    discount: "20% OFF",
    image:
      "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400",
  },
  {
    id: 3,
    name: "Smart Phone",
    price: 24999,
    rating: 4.7,
    discount: "35% OFF",
    image:
      "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400",
  },
  {
    id: 4,
    name: "Smart Watch",
    price: 3999,
    rating: 4.6,
    discount: "40% OFF",
    image:
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 2999,
    rating: 4.5,
    discount: "25% OFF",
    image:
      "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=400",
  },
];
// Dummy User Data
const users = [
  {
    email: "admin@gmail.com",
    password: "123456",
    name: "Admin",
  },
];

// Home Route
app.get("/", (req, res) => {
  res.send("Welcome to ShopEasy Backend 🚀");
});

// Get Products API
app.get("/products", (req, res) => {
  res.json(products);
});

// Login API
app.post("/login", (req, res) => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    res.status(200).json({
      success: true,
      message: "Login Successful",
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } else {
    res.status(401).json({
      success: false,
      message: "Invalid Email or Password",
    });
  }
});

// Start Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});