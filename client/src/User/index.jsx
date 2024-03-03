import React from 'react'
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductsPage from './pages/ProductsPage';
import Products from './pages/Products';
import UserNav from './Components/UserNav'

// import '../App.css'

import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

export default function User() {
  return (
    <>
      <UserNav/>
          <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products/category/:categoryName" element={<CategoryPage />} />
      <Route path="/products" element={<Products />} />
        <Route path="/products/:productID" element={<ProductsPage />} />
        <Route path="*" element={<Navigate to={'/'} replace="true" />} />
    </Routes>
    </>

  )
}
