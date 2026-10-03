import { Link, useLocation } from 'react-router';
import './NoEncontrada.css';

function NoEncontrada() {
  const { pathname } = useLocation();

  return (
    <section className="no-encontrada">
      <p className="no-encontrada__codigo">404</p>
      <h1 className="no-encontrada__titulo">Página no encontrada</h1>
      <p className="no-encontrada__texto">
        La dirección <span className="no-encontrada__ruta">{pathname}</span> no existe.
      </p>
      <Link className="no-encontrada__boton" to="/">Volver al inicio</Link>
    </section>
  );
}

export default NoEncontrada;
