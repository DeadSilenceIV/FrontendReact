import { useState } from 'react';
import './Contador.css';

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <section className="contador" id="contador">
      <h2 className="contador__titulo">Cuántos estudiantes van a inscribirse?</h2>
      <p className="contador__texto">Usa los botones para ajustar el número</p>

      <div className="contador__caja">
        <button className="contador__boton" onClick={() => setCuenta(cuenta - 1)}>−</button>
        <span className="contador__numero">{cuenta}</span>
        <button className="contador__boton" onClick={() => setCuenta(cuenta + 1)}>+</button>
      </div>

      <p className="contador__etiqueta">estudiantes inscritos</p>
    </section>
  );
}

export default Contador;
