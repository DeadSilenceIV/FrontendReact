import { useState } from 'react';
import './FormularioLogin.css';

function FormularioLogin() {
  const [correo, setCorreo] = useState('');
  const [clave, setClave] = useState('');
  const [enviado, setEnviado] = useState(false);

  const hayCamposVacios = correo.trim() === '' || clave.trim() === '';

  function enviar(e) {
    e.preventDefault();
    if (hayCamposVacios) return;
    setEnviado(true);
  }

  return (
    <form className="formulario" onSubmit={enviar} noValidate>
      <label className="formulario__etiqueta" htmlFor="correo">Correo</label>
      <input
        className="formulario__campo"
        id="correo"
        type="email"
        autoComplete="email"
        placeholder="nombre@empresa.com"
        value={correo}
        onChange={(e) => setCorreo(e.target.value)}
        disabled={enviado}
      />

      <label className="formulario__etiqueta" htmlFor="clave">Contraseña</label>
      <input
        className="formulario__campo"
        id="clave"
        type="password"
        autoComplete="current-password"
        value={clave}
        onChange={(e) => setClave(e.target.value)}
        disabled={enviado}
      />

      <button className="formulario__boton" type="submit" disabled={hayCamposVacios || enviado}>
        Iniciar sesión
      </button>

      {enviado && (
        <p className="formulario__mensaje" role="status">
          Listo. Como no hay un servidor detrás, no se revisó nada.
        </p>
      )}

      <p className="formulario__nota">
        Esto es solo la interfaz: no se valida el correo ni la contraseña.
      </p>
    </form>
  );
}

export default FormularioLogin;
