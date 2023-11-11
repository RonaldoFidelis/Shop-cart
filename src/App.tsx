import { BrowserRouter, Route, Routes } from "react-router-dom";

//Pages
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Order } from "./pages/Order";
import { Help } from "./pages/Help";
import { Favorite } from "./pages/Favorite";
import { Cart } from "./pages/Cart";
import { NotFound } from "./pages/NotFound";

// Components
import { Nav } from "./components/Nav";

export function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/profile" element={<Profile/>} />
        <Route path="/order" element={<Order/>} />
        <Route path="/help" element={<Help/>} />
        <Route path="/favorite" element={<Favorite/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    </BrowserRouter>
  )
}

