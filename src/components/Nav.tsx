import { useEffect, useState, useRef, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

export function Nav() {
  const { cart, favorite } = useContext(CartContext);
  const [menu, setMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const showOptions = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {

      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <nav className="z-50 fixed flex items-center justify-between p-2 w-full h-[40px] bg-black">
      <Link to='/' className="text-white font-semibold text-xl">Sneakerhead</Link>

      <ul className="flex flex-row items-center justify-center text-white gap-4 px-2">
        <div className="cursor-pointer" ref={menuRef}>
          <div onClick={showOptions}>
            <i className="text-[20px] fa-solid fa-user"></i>
          </div>
        </div>
        <li className="cursor-pointer">
          <Link to="/favorite">
            {favorite.length > 0 ? (
              <span className="absolute flex items-center justify-center right-[46px] top-[3px] bg-[#F30000] p-[6px] rounded-full text-xs text-white"></span>
            ) : ('')}
            <i className="text-[20px] fa-regular fa-heart"></i>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/cart">
            {cart.length > 0 ? (
              <span className="absolute flex items-center justify-center right-[11px] top-[3px] md:right-2 md:top-1 bg-green-500 p-[6px] rounded-full text-xs text-white"></span>
            ) : ('')}
            <i className="text-[19px] fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
      </ul>

      <div
        className={`absolute ${!menu ? 'hidden' : ' '} w-[250px] h-[250px] bg-white right-[90px] top-[45px] rounded-md px-2 shadow-xl`}>
        <div className="flex items-center gap-3 border-b-[1.5px] border-black p-2">
          <span className="bg-slate-300 px-3 py-2 rounded-full">
            <i className="text-[30px] fa-regular fa-user"></i>
          </span>
          <h1 className="text-xl">User</h1>
        </div>
        <div className="w-full">
          <ul className="px-1">
            <li>
              <Link
                className="cursor-pointer flex flex-row items-center justify-between w-full mt-3"
                to='/profile'>
                <div className="flex items-center justify-center gap-3">
                  <i className="text-[14px] bg-slate-300 rounded-full p-[9px] fa-solid fa-user"></i>
                  <h1 className="font-light">Profile</h1>
                </div>
                <i className="text-[13px] cursor-pointer fa-solid fa-arrow-right"></i>
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer flex flex-row items-center justify-between w-full mt-3"
                to='/order'>
                <div className="flex items-center justify-center gap-3">
                  <i className="text-[14px] bg-slate-300 rounded-full p-[9px] fa-solid fa-paper-plane"></i>
                  <h1 className="font-light">Order</h1>
                </div>
                <i className="text-[13px] cursor-pointer fa-solid fa-arrow-right"></i>
              </Link>
            </li>
            <li>
              <Link
                className="cursor-pointer flex flex-row items-center justify-between w-full mt-3"
                to='/help'>
                <div className="flex items-center justify-center gap-3">
                  <i className="text-[14px] bg-slate-300 rounded-full p-[9px] fa-solid fa-circle-info"></i>
                  <h1 className="font-light">Help & Support</h1>
                </div>
                <i className="text-[13px] cursor-pointer fa-solid fa-arrow-right"></i>
              </Link>
            </li>
            <li className="cursor-pointer flex flex-row items-center justify-between w-full mt-3">
              <div className="flex items-center justify-center gap-3">
                <i className="text-[14px] bg-slate-300 rounded-full p-[9px] fa-solid fa-arrow-right-from-bracket"></i>
                <h1 className="font-light">Logout</h1>
              </div>
              <i className="text-[13px] cursor-pointer fa-solid fa-arrow-right "></i>
            </li>
          </ul>
        </div>
      </div>
    </nav >
  )
}
