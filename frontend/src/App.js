import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Pages/Home';
import Signup from './Components/Pages/Signup/Signup';



function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Signup/>}/>
      </Routes>
    </BrowserRouter>
  </div> 
  );
}

export default App;
