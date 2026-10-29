
import './styles/App.css';
import NavBar from './components/Nav_bar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter basename="/layla_portfolio">
            <div className="main">
                <NavBar />

                <Routes>
                    <Route path="/" element={<Main />} />
                    <Route path='/projects' element={}></Route>
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
