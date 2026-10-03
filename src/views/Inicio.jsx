import { Link } from 'react-router';
import './Inicio.css';

function Inicio() {
  return (
    <section className="inicio">
      <h1 className="inicio__titulo">
        Aprende <span className="inicio__resaltado">React</span> desde cero
      </h1>
      <p className="inicio__texto">
        Domina la librería más popular del frontend con proyectos prácticos y reales.
      </p>
      <Link className="inicio__boton" to="/cursos">Ver Cursos</Link>
    </section>
  );
}

export default Inicio;
