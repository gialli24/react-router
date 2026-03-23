import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import AboutUs from "./pages/AboutUs"
import Products from "./pages/Products"
import Product from "./pages/Product"

import MainLayout from "./layout/MainLayout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/products" element={<Products />} />
            <Route path="/product/:id" element={<Product />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
