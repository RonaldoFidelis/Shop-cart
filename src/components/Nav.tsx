import { useState } from "react";

export function Nav() {
  const [menu, setMenu] = useState<boolean>(false);

  const showOptions = () => { 
    if(menu){
      setMenu(false);
    } else {
      setMenu(true);
    }
  }

  return (
    <nav className="fixed flex items-center justify-between p-2 w-full h-[40px] bg-black">
      <h1 className="text-white font-semibold text-xl">Hamburgueria</h1>

      <ul className="flex flex-row items-center justify-center text-white">
        <li className="cursor-pointer mx-5 font-medium">Cardápio</li>
        <li className="cursor-pointer mr-3">
          <div
            onClick={() => showOptions()}
            className=" flex items-center justify-center cursor-pointer">
              <i className="text-[15px] fa-solid fa-user"></i>
            </div>
        </li>
        <li className="cursor-pointer ">
          <i className="text-[14.5px] fa-solid fa-cart-shopping"></i>
        </li>
      </ul>

      <div className={`absolute ${!menu ? 'hidden' : ' '} w-[250px] h-[250px] bg-white right-[15px] top-[46px] rounded-md px-2`}>
        <div className="flex items-center gap-2 border-b-[1.5px] border-black p-2">
          <i className="text-[25px] bg-slate-300 rounded-full p-2.5 fa-regular fa-user"></i>
          <h1>Ronaldo Rafael F.</h1>
        </div>
        <div className="w-full">
          <ul className="px-1">
            <li className="cursor-pointer flex flex-row items-center justify-between w-full mt-3">
              <div className="flex items-center justify-center gap-3">
                <i className="text-[14px] bg-slate-300 rounded-full p-[9px] fa-solid fa-user"></i>
                <h1 className="font-light">Profile</h1>
              </div>
              <i className="text-[13px] cursor-pointer fa-solid fa-arrow-right"></i>
            </li>
            <li className="cursor-pointer flex flex-row items-center justify-between w-full mt-3">
              <div className="flex items-center justify-center gap-3">
                <i className="text-[14px] bg-slate-300 rounded-full p-[9px] fa-solid fa-paper-plane"></i>
                <h1 className="font-light">Order</h1>
              </div>
              <i className="text-[13px] cursor-pointer fa-solid fa-arrow-right"></i>
            </li>
            <li className="cursor-pointer flex flex-row items-center justify-between w-full mt-3">
              <div className="flex items-center justify-center gap-3">
                <i className="text-[14px] bg-slate-300 rounded-full p-[9px] fa-solid fa-circle-info"></i>
                <h1 className="font-light">Help & Support</h1>
              </div>
              <i className="text-[13px] cursor-pointer fa-solid fa-arrow-right"></i>
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