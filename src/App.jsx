
import './styles/App.css';
import NavBar from './components/Nav_bar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Hero from './components/Hero';
import Project from './components/Projects'
import About from './components/About'
import Skills from './components/Skills';
import Footer from './components/Footer';
function App() {
    return (
        <BrowserRouter basename="/layla_portfolio">
            <div className="main">
                <NavBar />
                <Hero/>
                <About/>
                <Skills/>
                <Project/>
                <Footer/>


                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path='/projects' element={<Project/>}></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;

function Main() {
    return (
        <>
            {/* Your homepage sections will go here */}
        </>
    );
}
