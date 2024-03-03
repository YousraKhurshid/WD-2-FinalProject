import React from 'react'
import Layout from './Layout'
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import {Orders, Products, Home, Categories} from './pages'

export default function Admin() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="*" element={<Navigate to={'/'} replace="true" />} />
      </Routes>
    </Layout>
  )
}
