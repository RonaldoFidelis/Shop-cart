import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Cart } from "./pages/Cart";
import { Nav } from "./components/Nav";
import { Favorite } from "./pages/Favorite";

export function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/favorite" element={<Favorite/>} />
      </Routes>
    </BrowserRouter>
  )
}

