import { type FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Formulario from './pages/Formulario';
import CRMPage from './pages/CRMPage';

const App: FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/crm" element={<CRMPage />} />
        <Route path="/formulario" element={<Formulario />} />
      </Routes>
    </Router>
  );
}

export default App;
