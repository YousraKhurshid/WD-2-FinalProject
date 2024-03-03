import React from 'react'
import Layout from './Layout'
import {
  Navigate,
  Route,
  Routes,
} from "react-router-dom";

import {Orders, Products, Home, Categories, Delivered, VenderProfile} from './pages'

export default function Vender() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/venderProfile" element={<VenderProfile />} />
        <Route path="/delivered" element={<Delivered />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/products" element={<Products />} />
        <Route path="/Orders" element={<Orders />} />
        <Route path="*" element={<Navigate to={'/'} replace="true" />} />
      </Routes>
    </Layout>
  )
}
