import { LogoHome } from "../components/LogoHome";
import { Sneaker } from "../components/Sneaker";
import { Footer } from "../components/Footer";

export function Home() {

  return (
    <div className="flex flex-col">
      <LogoHome/>
      <Sneaker/>
      <Footer/>
    </div>
  )
}
