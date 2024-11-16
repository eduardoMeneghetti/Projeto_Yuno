import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Components/Login/Login.js';
import Cadastro from './Components/Cadastro/Cadastro.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Cadastro />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
