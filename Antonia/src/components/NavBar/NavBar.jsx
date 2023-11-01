import CartWidget from "../CartWidget/CartWidget";
import "./navbar.modules.css"
import logo from "./assets/logo.png"

export default function NavBar() {
  return (
    
    <nav>
    <img src={logo} alt="logo" />
    <div>
        <button>Categorias</button>
        <button>Contacto</button>
        <button>Productos</button>
    </div>
    
    <CartWidget/>

    </nav>
    
  )
}
