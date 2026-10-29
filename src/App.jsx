import './styles/App.css'
import NavBar from './components/Nav_bar'
import {BrowserRouter, Routes ,Route} from 'react-router-dom'
function App(){
   return(
    <>
     <div className='main'>

    
    <NavBar/>
    <BrowserRouter>
    <Routes>
      <Route path='/layla_portfolio/' element={<Main/>}></Route>
    
    </Routes>
    </BrowserRouter>
    </div>
    </>
   )
}
export default App

function Main(){
  return(
    <>
   
    </>
  )
}