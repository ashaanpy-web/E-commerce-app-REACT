# 🛒 E-Commerce Web Application

A fast, responsive, modern e-commerce storefront built with **React** and **Tailwind CSS**. Designed with an intuitive shopping flow, real-time cart state management, dynamic product filtering, and a clean, mobile-first user interface.

---

## 🌟 Key Features

- **Dynamic Product Catalog:** Display products with grid layout, badges, star ratings, and real-time stock indicators.
- **Advanced Search & Filtering:** Filter items by category, price range, and sort by price or popularity in real time.
- **Interactive Shopping Cart:** Slide-out drawer or dedicated cart page with quantity controls, subtotal calculations, and item removal.
- **Product Detail Modal / Page:** In-depth view featuring image galleries, variant selection (size, color), and detailed specifications.
- **Responsive Mobile Navigation:** Full mobile support with a collapsible drawer menu, quick-access search, and sticky cart indicators.
- **Mock Checkout Pipeline:** Multi-step order summary, shipping address intake, and payment method selection.

---

## 🛠️ Tech Stack

- **Frontend Framework:** React.js (Functional Components, Hooks)
- **Styling & UI:** Tailwind CSS, Lucide React (Icons)
- **State Management:** React Context API / Redux Toolkit (Cart & Filter State)
- **Routing:** React Router v6
- **Build Tool:** Vite / Create React App

---

## 🏗️ State Management & Cart Logic Overview

The core cart functionality is driven by a custom React Context provider managing global cart state, item quantities, and localStorage persistence:

```javascript
// Sample Cart Context Logic
const addToCart = (product, selectedVariant) => {
  setCart((prevCart) => {
    const existingIndex = prevCart.findIndex(
      (item) => item.id === product.id && item.variant === selectedVariant
    );

    if (existingIndex > -1) {
      const updatedCart = [...prevCart];
      updatedCart[existingIndex].quantity += 1;
      return updatedCart;
    }

    return [...prevCart, { ...product, variant: selectedVariant, quantity: 1 }];
  });
};
