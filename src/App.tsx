import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Cabecalho from './Componentes/Cabecalho';
import EstiloGlobal from './Componentes/EstiloGlobal';
import Titulo from './Componentes/Titulo';
import Projetos from './Componentes/Projetos';

function App() {
  return (
    <>
      <EstiloGlobal />
      <Router>
        <Cabecalho />
        <Routes>
          <Route path="/" element={<Titulo />} />
          <Route path="/projetos" element={<Projetos />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;