import burger from '../assets/products-img/xbacon.png'


export function LogoHome() {
  return (
    <section className="py-20 w-full bg-[#FFCC01] flex flex-col md:flex-row items-center justify-center">
      <img className='w-[320px]' src={burger} alt="foto-de-hambuguer" />
      <div className="flex flex-col items-center justify-center gap-2">
        <div className="flex flex-col items-center justify-center leading-relaxed">
          <h2 className='text-lg font-bold '>Welcome to</h2>
          <h1 className="text-4xl md:text-6xl font-extrabold s">BurguerLovers</h1>
          <span className='bg-black w-[270px] md:w-[350px] h-[2px] mt-5'></span>
          <h3 className="text-base mt-2 font-medium text-white">Savor the magic in every bite!</h3>
        </div>
      </div>
    </section>
  )
}