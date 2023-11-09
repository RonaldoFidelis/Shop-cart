import Sneaker from "../assets/products-img/teste.jpg"

export function LogoHome() {
  return (
    <section className="w-full bg-[#F30000] flex flex-col md:flex-row items-center justify-center py-5">
      <img className='w-[500px]' src={Sneaker}/>
    </section>
  )
}
