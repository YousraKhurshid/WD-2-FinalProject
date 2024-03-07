import React from 'react'
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Products from './pages/Products';
import CategoryPage from './pages/CategoryPage';
import ProductsPage from './pages/ProductsPage';
export default function Guest() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/products/category/:categoryName" element={<CategoryPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/productsPage" element={<ProductsPage />} />
      <Route path="*" element={<Navigate to={'/login'} replace="true" />} />
    </Routes>
  )
}
