import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Nav } from "./components/Nav";

export function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/carrinho" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  )
}

