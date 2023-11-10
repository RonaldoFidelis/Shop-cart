import perfil from "../assets/products-img/perfil-ft.jpeg";
import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

export function Nav() {
  const [menu, setMenu] = useState<boolean>(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const showOptions = () => {
    setMenu(!menu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent|TouchEvent) => {

      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenu(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  },[]);

  return (
    <nav className="z-10 fixed flex items-center justify-between p-2 w-full h-[40px] bg-black">
      <Link to='/' className="text-white font-semibold text-xl">Sneakerhead</Link>

      <ul className="flex flex-row items-center justify-center text-white gap-4 px-2">
        <div className="cursor-pointer" ref={menuRef}>
          <div onClick={showOptions}>
            <i className="text-[20px] fa-solid fa-user"></i>
          </div>
        </div>
        <li className="cursor-pointer">
          <Link to="/favorite">
            <i className="text-[20px] fa-regular fa-heart"></i>
          </Link>
        </li>
        <li className="cursor-pointer">
          <Link to="/cart">
            <i className="text-[19px] fa-solid fa-cart-shopping"></i>
          </Link>
        </li>
      </ul>

      <div
        className={`absolute ${!menu ? 'hidden' : ' '} w-[250px] h-[250px] bg-white right-[90px] top-[45px] rounded-md px-2`}>
        <div className="flex items-center gap-3 border-b-[1.5px] border-black p-2">
          <img src={perfil} className="w-[50px] rounded-full" />
          <h1 className="text-lg">User</h1>
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
    </nav>
  )
}
