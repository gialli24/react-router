import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<ChiSiamo />} />
          <Route path="/products" element={<Prodotti />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
