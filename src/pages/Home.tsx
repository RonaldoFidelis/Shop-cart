import { LogoHome } from "../components/LogoHome";
import { Menu } from "../components/Menu";

export function Home() {
  return (
    <div className="flex flex-col">
      <LogoHome/>
      <Menu/>
    </div>
  )
}