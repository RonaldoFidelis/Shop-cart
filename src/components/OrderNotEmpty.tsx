import { useState } from "react";
import { useMain } from "../hooks/useMain"
import { ItemOrder } from "../interface/itemOrder";

export function OrderNotEmpty() {
  const { orders } = useMain();
  const [search, setSearch] = useState<string>('');
  const [findOrder, setFindOrder] = useState<boolean>(false);
  const [item, setItem] = useState<ItemOrder[]>([]);

  const handleSubmit = (e: string): void => {
    setSearch(e);
    const possibility = orders.order.filter((i) => i.id.toLowerCase().includes(e.toLowerCase()));

    if (possibility.length > 0) {
      setFindOrder(true);
      setItem(possibility);
    } else {
      setFindOrder(false);
      setItem([]);
    }
  }

  return (
    <div className="flex flex-col items-center w-full min-h-screen gap-5 px-5">
      <h1 className="mt-20 text-2xl font-medium">Your Orders</h1>
      <form
        className="w-full flex flex-row items-center justify-center gap-2">
        <input
          value={search}
          onChange={(e) => handleSubmit(e.target.value)}
          placeholder="Search your orders from ID..."
          className="bg-slate-200 w-[70%] md:w-[55%] lg:w-[50%] h-[40px] rounded-md px-2"
          type="text" />
      </form>
      <div className="w-full flex flex-col items-center justify-center gap-5 mt-5 mb-5">
        {search === '' ? (
          orders.order.map((e, key) => (
            <div className="flex flex-col bg-slate-100 rounded-lg shadow-md" key={key}>
              <h1 className="mx-3 mt-2 text-base font-medium">#{e.id}</h1>
              {e.item.map((item) => (
                <div className="flex px-3 py-4">
                  <div className='flex max-w-[115px] max-h-[115px] items-center justify-center overflow-hidden bg-black rounded-lg p-2'>
                    <img className='w-[100%]' src={item.img} alt={item.name} />
                  </div>
                  <div className="flex flex-col p-2">
                    <h2 className="md:text-lg font-medium flex items-center">{item.name}</h2>
                    <h3 className="md:text-base font-normal flex items-center">{item.color}</h3>
                    <p className="md:text-sm font-normal flex items-center">x{item.size.length}</p>
                    <span>Size:{item.size.map((size, key) => (
                      <button
                        key={key}
                        className="p-1 rounded-md bg-slate-200 hover:bg-slate-300 duration-500 mx-1 text-sm font-light">{size}</button>
                    ))}
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex justify-between border-b-2 border-slate-200 mb-3 mx-3">
                <h2 className="py-2 text-[15px] font-medium">{e.item.reduce((ac, item) => ac + item.size.length ,0)} item</h2>
                <h2 className="py-2 text-[15px] font-medium">Total order: R${e.total}</h2>
              </div>
              <div className="flex items-center">
                <span className="flex items-center mx-3 mb-2 gap-2">
                  <i className="text-teal-800 text-sm fa-solid fa-truck"></i>
                  <p className="text-teal-800 text-sm">Your order will be shipped soon</p>
                </span>
              </div>
            </div>
          ))
        ) : (
          findOrder ? (
            item.map((e, key) => (
              <div className="flex flex-col bg-slate-100 rounded-lg shadow-md" key={key}>
              <h1 className="mx-3 mt-2 text-base font-medium">#{e.id}</h1>
              {e.item.map((item) => (
                <div className="flex px-3 py-4">
                  <div className='flex max-w-[115px] max-h-[115px] items-center justify-center overflow-hidden bg-black rounded-lg p-2'>
                    <img className='w-[100%]' src={item.img} alt={item.name} />
                  </div>
                  <div className="flex flex-col p-2">
                    <h2 className="md:text-lg font-medium flex items-center">{item.name}</h2>
                    <h3 className="md:text-base font-normal flex items-center">{item.color}</h3>
                    <p className="md:text-sm font-normal flex items-center">x{item.size.length}</p>
                    <span>Size:{item.size.map((size, key) => (
                      <button
                        key={key}
                        className="p-1 rounded-md bg-slate-200 hover:bg-slate-300 duration-500 mx-1 text-sm font-light">{size}</button>
                    ))}
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex justify-between border-b-2 border-slate-200 mb-3 mx-3">
                <h2 className="py-2 text-[15px] font-medium">{e.item.reduce((ac, item) => ac + item.size.length ,0)} item</h2>
                <h2 className="py-2 text-[15px] font-medium">Total order: R${e.total}</h2>
              </div>
              <div className="flex items-center">
                <span className="flex items-center mx-3 mb-2 gap-2">
                  <i className="text-teal-800 text-sm fa-solid fa-truck"></i>
                  <p className="text-teal-800 text-sm">Your order is being shipped</p>
                </span>
              </div>
            </div>
            ))
          ) : (
            <div className="flex items-center justify-center">
              <h1 className="text-lg font-medium">Order not found</h1>
            </div>
          )
        )}
      </div>
    </div>
  )
}
