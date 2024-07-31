import logo from './logo.svg';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { Footer } from './components/Footer';
import { Nav } from './components/Nav';
import { Tareas } from './components/Tareas';


function HomePage() {
  return (
    <div className="aplicacion-tareas">
      <Header/>
      <Nav/>
      <div>
        <Sidebar/>
      </div>
      <Footer/>
    </div>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/Tareas' element={<Tareas />} />
      </Routes>
    </Router>
  );
}

export default App;
