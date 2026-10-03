import Contador from '../components/Contador';
import './Nosotros.css';

function Nosotros() {
  return (
    <section className="nosotros">
      <h1 className="nosotros__titulo">Cuántos estudiantes van a inscribirse?</h1>
      <p className="nosotros__texto">Usa los botones para ajustar el número</p>
      <Contador />
      <p className="nosotros__etiqueta">estudiantes inscritos</p>
    </section>
  );
}

export default Nosotros;
