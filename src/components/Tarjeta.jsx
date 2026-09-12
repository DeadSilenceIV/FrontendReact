import './Tarjeta.css';

function Tarjeta({ icono, titulo, texto, nivel }) {
  return (
    <article className="tarjeta">
      <span className="tarjeta__icono">{icono}</span>
      <h3 className="tarjeta__titulo">{titulo}</h3>
      <p className="tarjeta__texto">{texto}</p>
      <span className="tarjeta__nivel">{nivel}</span>
    </article>
  );
}

export default Tarjeta;
