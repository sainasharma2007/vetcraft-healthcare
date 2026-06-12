# Vetcraft Healthcare

**Serving Humanity..... Caring Animals With The Best Quality Products.**

Vetcraft Healthcare is a full-stack MERN (MongoDB, Express, React, Node.js) website built to showcase a catalog of veterinary medicines and animal feed supplements for cattle and livestock. The site is purely informational — visitors can browse, search, and learn about each product, including its MRP, pack size, and detailed description.

---

## ✨ Features

- **Animated Intro Page** — Welcomes visitors with the Vetcraft logo, brand tagline, animated counters, and a scrolling marquee
- **Product Catalog** — Browse all products with images, categories, and quick details
- **Category Filters** — Filter products by *Animal Feed Supplement* or *Medicine*
- **Search Bar** — Instantly search products by name or category
- **Product Details Page** — View MRP and pack size for each product (including multiple pack-size variants)
- **Full Description Page** — Complete indication and usage details for each product
- **Direct Email Contact** — One-click access to Gmail compose for `vetcrafthealthcare@gmail.com`
- **No Login Required** — Fully open, public-facing catalog

---

## 🛠️ Tech Stack

**Frontend**
- React (Vite)
- React Router DOM
- Tailwind CSS
- Axios

**Backend**
- Node.js
- Express.js
- MongoDB Atlas (Mongoose)

---

## 📁 Project Structure

```
project/
├── backend/
│   ├── config/         # MongoDB connection
│   ├── controllers/     # Route logic (products)
│   ├── models/          # Mongoose schemas
│   ├── routes/          # Express routes
│   ├── seed.js          # Seeds product data into MongoDB
│   ├── server.js         # Express app entry point
│   └── .env              # Environment variables (not committed)
│
└── frontend/
    ├── public/           # Product images, logo
    └── src/
        ├── components/
        │   ├── screens/      # IntroPage, Home, ProductDetails, Description
        │   └── utilities/    # Navbar
        ├── context/          # SearchContext (search state)
        ├── App.jsx
        └── main.jsx
```

---

## 🚀 Getting Started

### Prerequisites
- Node.js (v18+)
- MongoDB Atlas account (or local MongoDB)

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Seed the database with product data:
```bash
node seed.js
```

Start the backend server:
```bash
npm run dev
```

The API runs on `http://localhost:5000`

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

The site runs on `http://localhost:5173`

---

## 📦 API Endpoints

| Method | Endpoint              | Description                  |
|--------|-----------------------|-------------------------------|
| GET    | `/api/products`       | Get all products              |
| GET    | `/api/products/:id`   | Get a single product by ID    |
| POST   | `/api/products`       | Add a new product (used by seed) |

---

## 📧 Contact

For inquiries, reach out at **vetcrafthealthcare@gmail.com**

---

## 📄 License

This project is proprietary to Vetcraft Healthcare. All rights reserved.