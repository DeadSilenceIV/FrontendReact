import Tarjeta from './Tarjeta';
import './Cursos.css';

const cursos = [
  {
    id: 1,
    icono: '⚛️',
    titulo: 'React Básico',
    texto: 'Componentes, props, estado y eventos. Todo lo que necesitas para empezar.',
    nivel: 'Principiante',
  },
  {
    id: 2,
    icono: '🔁',
    titulo: 'React Hooks',
    texto: 'Profundiza en useState, useEffect y crea tus propios custom hooks.',
    nivel: 'Intermedio',
  },
  {
    id: 3,
    icono: '🗂️',
    titulo: 'Estado Global',
    texto: 'Gestiona el estado con Context API y aprende cuándo usarlo.',
    nivel: 'Intermedio',
  },
  {
    id: 4,
    icono: '🚀',
    titulo: 'React Avanzado',
    texto: 'Rendimiento, patrones avanzados y arquitectura para proyectos grandes.',
    nivel: 'Avanzado',
  },
];

function Cursos() {
  return (
    <section className="cursos" id="cursos">
      <h2 className="cursos__titulo">Nuestros Cursos</h2>
      <p className="cursos__texto">Elige el camino que mejor se adapte a ti</p>

      <div className="cursos__lista">
        {cursos.map(c => (
          <Tarjeta
            key={c.id}
            icono={c.icono}
            titulo={c.titulo}
            texto={c.texto}
            nivel={c.nivel}
          />
        ))}
      </div>
    </section>
  );
}

export default Cursos;
