import { Link, NavLink } from 'react-router';
import './Navbar.css';

function claseEnlace({ isActive }) {
  return isActive ? 'navbar__enlace navbar__enlace--activo' : 'navbar__enlace';
}

function Navbar() {
  return (
    <header className="navbar">
      <Link className="navbar__logo" to="/">ReactAcademy</Link>
      <nav className="navbar__menu">
        <NavLink className={claseEnlace} to="/" end>Inicio</NavLink>
        <NavLink className={claseEnlace} to="/cursos">Cursos</NavLink>
        <NavLink className={claseEnlace} to="/nosotros">Nosotros</NavLink>
        <NavLink className="navbar__boton" to="/login">Iniciar sesión</NavLink>
      </nav>
    </header>
  );
}

export default Navbar;
