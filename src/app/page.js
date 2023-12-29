import Forms from "./components/Forms";
import Navegacion from "./components/Navegacion";
import Projects from "./views/contact/page";
import Principal from "./views/home/page";

export default function Home() {
  return (
    <main className="">
      <Navegacion/>
      <Principal/>
      <Projects/>
      <Forms/>
    </main>
  )
}
