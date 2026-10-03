import FormularioLogin from '../components/FormularioLogin';
import './Login.css';

function Login() {
  return (
    <section className="login">
      <div className="login__caja">
        <h1 className="login__titulo">Inicia sesión</h1>
        <p className="login__texto">Entra para seguir con tus cursos.</p>
        <FormularioLogin />
      </div>
    </section>
  );
}

export default Login;
