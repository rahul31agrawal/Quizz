import {NavLink} from "react-router-dom";
import "./Navbar.css"


export default function NavBar() {
  return (
    <nav className="navbar">
         <h2 className="logo">
          
          <NavLink to="/" end>
            Home
           </NavLink>

           <NavLink to="/rules" end>
            Rules
           </NavLink>
        </h2>
    </nav>
  );
}