import CartWidget from "../CartWidget/CartWidget";
import "./navbar.modules.css"
import logo from "./assets/logo.png"
import { NavLink } from "react-router-dom";
export default function NavBar() {
  return (
    
    <nav>
    <NavLink to={"/"} className={({isActive})=>isActive? 'ActiveOption':'OptionNav'}><img src={logo} alt="logo" /></NavLink>
    <div>
        
        
        <NavLink to={"/Nosotros"} className={({isActive})=>isActive? 'ActiveOption':'OptionNav'} >Nosotros</NavLink>
        <NavLink to={"/Contacto"} className={({isActive})=>isActive? 'ActiveOption':'OptionNav'} >Contacto</NavLink>
        <NavLink to={"/"} className={({isActive})=>isActive? 'ActiveOption':'OptionNav'} >Productos</NavLink>
    </div>
    
    <CartWidget/>

    </nav>
    
  )
}
