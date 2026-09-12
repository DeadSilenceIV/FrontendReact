import './Barra.css';

function Barra() {
  return (
    <header className="barra">
      <a className="barra__logo" href="#portada">ReactAcademy</a>
      <nav className="barra__menu">
        <a className="barra__enlace" href="#portada">Inicio</a>
        <a className="barra__enlace" href="#cursos">Cursos</a>
        <a className="barra__enlace" href="#contador">Nosotros</a>
      </nav>
    </header>
  );
}

export default Barra;
