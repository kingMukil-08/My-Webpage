import logo from './logo.svg';
import './App.css';
import {Route,Routes} from "react-router-dom"
import { Home } from './componente/home'; 
import { About } from './componente/about';
import { Navbar } from './componente/navbar';
import { Contact } from './componente/contact';
import { Work } from './componente/work';
import { Bg } from './componente/bg';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={<About/>}/>
        <Route path='work' element={<Work/>}/>
        <Route path='contact' element={<Contact/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
