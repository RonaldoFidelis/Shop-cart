import { LogoHome } from "../components/LogoHome";
import { Sneaker } from "../components/Sneaker";

export function Home() {
  return (
    <div className="flex flex-col">
      <LogoHome/>
      <Sneaker/>
    </div>
  )
}