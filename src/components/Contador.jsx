import { useState } from 'react';
import './Contador.css';

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div className="contador">
      <button className="contador__boton" onClick={() => setCuenta(cuenta - 1)}>−</button>
      <span className="contador__numero">{cuenta}</span>
      <button className="contador__boton" onClick={() => setCuenta(cuenta + 1)}>+</button>
    </div>
  );
}

export default Contador;
