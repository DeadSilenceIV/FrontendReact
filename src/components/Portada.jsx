import './Portada.css';

function Portada() {
  return (
    <section className="portada" id="portada">
      <h1 className="portada__titulo">
        Aprende <span className="portada__resaltado">React</span> desde cero
      </h1>
      <p className="portada__texto">
        Domina la librería más popular del frontend con proyectos prácticos y reales.
      </p>
      <a className="portada__boton" href="#cursos">Ver Cursos</a>
    </section>
  );
}

export default Portada;
