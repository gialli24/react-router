import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ChiSiamo from "./pages/ChiSiamo"
import Prodotti from "./pages/Prodotti"
import DefaultLayout from "./layout/DefaultLayout"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<ChiSiamo />} />
            <Route path="/products" element={<Prodotti />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
