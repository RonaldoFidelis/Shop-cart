import { useState } from "react";
import { useMain } from "../hooks/useMain";
import { ItemOrder } from "../interface/itemOrder";
import ReactModal from "react-modal";

//ReactModal.setAppElement('#root');

export function OrderNotEmpty() {
  const { orders } = useMain();
  const [search, setSearch] = useState<string>('');
  const [findOrder, setFindOrder] = useState<boolean>(false);
  const [item, setItem] = useState<ItemOrder[]>([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<ItemOrder | null>(null);

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

  const showOrder = (e: ItemOrder) => {
    console.log(e);
    setSelectedOrder(e);
    setModalIsOpen(true);
  }

  const cancelOrder = (e: ItemOrder) => {
    setModalIsOpen(false);
    orders.cancelOrder(e);
  }
  return (
    <div>
      <div className="flex flex-col items-center w-full min-h-screen gap-5 px-5">
        <h1 className="mt-20 text-2xl font-medium">Your Orders</h1>
        <form
          className="w-full flex flex-row items-center justify-center gap-2"
        >
          <input
            value={search}
            onChange={(e) => handleSubmit(e.target.value)}
            placeholder="Search your orders from ID..."
            className="bg-slate-200 w-[70%] md:w-[55%] lg:w-[50%] h-[40px] rounded-md px-2"
            type="text"
          />
        </form>
        <div className="w-ful flex flex-col items-center justify-center gap-4 mt-5 mb-5">
          {search === '' ? (
            orders.order.map((e, key) => (
              <div className="sm:w-[300px] md:w-[420px] flex flex-col bg-slate-100 rounded-lg shadow-md" key={key}>
                <div className="mx-3 flex justify-between items-center gap-1">
                  <p className="mt-2 text-base font-medium">#{e.id}</p>
                  <button
                    onClick={() => showOrder(e)}
                    className="mt-2"
                  >
                    <i className="block hover:text-teal-800 duration-500 fa-solid fa-arrow-up-right-from-square"></i>
                  </button>
                </div>
                {e.item.map((item) => (
                  <div className="flex px-3 py-4" key={item.name}>
                    <div className='flex max-w-[115px] max-h-[115px] items-center justify-center overflow-hidden bg-black rounded-lg p-2'>
                      <img className='w-[100%]' src={item.img} alt={item.name} />
                    </div>
                    <div className="flex flex-col p-2">
                      <h2 className="md:text-lg font-medium flex items-center">{item.name}</h2>
                      <h3 className="md:text-base font-normal flex items-center">{item.color}</h3>
                      <p className="md:text-sm font-normal flex items-center">x{item.size.length}</p>
                      <span className="text-sm">Size:{item.size.map((size, key) => (
                        <span
                          key={key}
                          className=" p-1 rounded-md bg-slate-200 hover:bg-slate-300 duration-500 mx-1 text-xs font-light">{size}</span>
                      ))}
                      </span>
                    </div>
                  </div>
                ))}
                <div className="flex justify-between border-b-2 border-slate-200 mb-3 mx-3">
                  <h2 className="py-2 text-[15px] font-medium">{e.item.reduce((ac, item) => ac + item.size.length, 0)} item</h2>
                  <h2 className="py-2 text-[15px] font-medium">Total order: ${e.total}</h2>
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
                <div className="sm:w-[300px] md:w-[420px] flex flex-col bg-slate-100 rounded-lg shadow-md" key={key}>
                  <div className="mx-3 flex justify-between items-center gap-1">
                    <p className="mt-2 text-base font-medium">#{e.id}</p>
                    <button
                      onClick={() => showOrder(e)}
                      className="mt-2"
                    >
                      <i className="block hover:text-teal-800 duration-500 fa-solid fa-arrow-up-right-from-square"></i>
                    </button>
                  </div>
                  {e.item.map((item) => (
                    <div className="flex px-3 py-4" key={item.name}>
                      <div className='flex max-w-[115px] max-h-[115px] items-center justify-center overflow-hidden bg-black rounded-lg p-2'>
                        <img className='w-[100%]' src={item.img} alt={item.name} />
                      </div>
                      <div className="flex flex-col p-2">
                        <h2 className="md:text-lg font-medium flex items-center">{item.name}</h2>
                        <h3 className="md:text-base font-normal flex items-center">{item.color}</h3>
                        <p className="md:text-sm font-normal flex items-center">x{item.size.length}</p>
                        <span className="text-sm">Size:{item.size.map((size, key) => (
                          <span
                            key={key}
                            className=" p-1 rounded-md bg-slate-200 hover:bg-slate-300 duration-500 mx-1 text-xs font-light">{size}</span>
                        ))}
                        </span>
                      </div>
                    </div>
                  ))}
                  <div className="flex justify-between border-b-2 border-slate-200 mb-3 mx-3">
                    <h2 className="py-2 text-[15px] font-medium">{e.item.reduce((ac, item) => ac + item.size.length, 0)} item</h2>
                    <h2 className="py-2 text-[15px] font-medium">Total order: ${e.total}</h2>
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
              <div className="flex items-center justify-center">
                <h1 className="text-lg font-medium">Order not found</h1>
              </div>
            )
          )}
        </div>

        {/* Modal */}
        <ReactModal
          isOpen={modalIsOpen}
          onRequestClose={() => setModalIsOpen(false)}
          contentLabel="Order Details"
          style={{
            content: {
              maxWidth: '500px',
              maxHeight: '550px',
              margin: 'auto',
            },
          }}
        >
          {selectedOrder && (
            <div className="flex flex-col w-full h-full">
              <div className="w-full flex justify-between items-center">
                <h1 className="text-[15px] font-medium">#{selectedOrder.id}</h1>
                <span onClick={() => setModalIsOpen(false)}>
                  <i className="block text-lg cursor-pointer fa-regular fa-circle-xmark"></i>
                </span>
              </div>
              {selectedOrder.item.map((item) => (
                <div className="flex px-3 py-2" key={item.name}>
                  <div className='flex max-w-[100px] max-h-[100px] items-center justify-center overflow-hidden bg-black rounded-lg p-2'>
                    <img className='w-[100%]' src={item.img} alt={item.name} />
                  </div>
                  <div className="flex flex-col p-2">
                    <h2 className="md:text-lg font-medium flex items-center">{item.name}</h2>
                    <h3 className="md:text-base font-normal flex items-center">{item.color}</h3>
                    <p className="md:text-sm font-normal flex items-center">x{item.size.length}</p>
                    <span className="text-sm flex flex-wrap">Size:{item.size.map((size, key) => (
                      <span
                        key={key}
                        className="p-[3px] rounded-md bg-slate-200 hover:bg-slate-300 duration-500 mx-1 text-xs font-light">{size}</span>
                    ))}
                    </span>
                  </div>
                </div>
              ))}
              <div className="flex flex-col mx-3 mb-3 gap-1">
                <span className="flex items-center gap-1">
                  <i className="text-sm fa-solid fa-house-chimney"></i>
                  <p className="text-sm font-medium">Address</p>
                </span>
                <p className="text-sm">St. Mark's Place n⁰ 05</p>
                <p className="text-sm">Cep: 10001</p>
                <p className="text-sm">Recipient: Ronaldo F.</p>
              </div>
              <div className="flex flex-col mx-3 mb-3 gap-1">
                <span className="flex items-center gap-1">
                  <i className="text-sm fa-solid fa-credit-card"></i>
                  <p className="text-sm font-medium">Form of payment</p>
                </span>
                <p className="text-sm">RONALDO R F S</p>
                <p className="text-sm">xxxx xxxx xxxx 5585</p>
                <p className="text-sm">Cash</p>
              </div>
              <div className="flex justify-between border-b-2 border-slate-200 mb-3 mx-3">
                <h2 className="py-2 text-[15px] font-medium">{selectedOrder.item.reduce((ac, item) => ac + item.size.length, 0)} item</h2>
                <h2 className="py-2 text-[15px] font-medium">Total order: ${selectedOrder.total}</h2>
              </div>
              <div className="flex flex-col mb-2">
                <span className="flex items-center mx-3 mb-2 gap-1">
                  <i className="text-teal-800 text-sm fa-solid fa-truck"></i>
                  <p className="text-teal-800 text-sm">Your order will be shipped soon</p>
                </span>
                <p className="mx-3 text-[13px]">Delivery estimate in 10 days ~ 15 days</p>
              </div>
              <div className="flex flex-col gap-2 justify-center items-center pb-5">
                <button
                  className="border-2 border-slate-100 w-full h-[30px] cursor-default text-slate-300">
                  Edit order
                </button>
                <button
                  onClick={() => cancelOrder(selectedOrder)}
                  className="border-2 w-full h-[30px] hover:bg-[#F30000] duration-700">
                  Cancel order
                </button>
                <p className="text-sm text-slate-500">You can still cancel the order</p>
              </div>
            </div>
          )}
        </ReactModal>
      </div>
    </div>
  )
}
