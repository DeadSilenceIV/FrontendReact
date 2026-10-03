import { Routes, Route } from 'react-router';
import ScrollArriba from './components/ScrollArriba';
import Navbar from './components/Navbar';
import Pie from './components/Pie';
import Inicio from './views/Inicio';
import Cursos from './views/Cursos';
import Nosotros from './views/Nosotros';
import Login from './views/Login';
import NoEncontrada from './views/NoEncontrada';

function App() {
  return (
    <>
      <ScrollArriba />
      <Navbar />
      <main className="contenido">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/cursos" element={<Cursos />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NoEncontrada />} />
        </Routes>
      </main>
      <Pie />
    </>
  );
}

export default App;
