import './styles/App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Detailed from './components/Projects_detailed';
import NavBar from './components/Nav_bar';
function App() {
  return (
    <BrowserRouter basename="/layla_portfolio">
        <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<Detailed />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;