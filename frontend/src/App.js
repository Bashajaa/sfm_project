import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Pages/Home';
import Signup from './Components/Pages/Signup/Signup';
import CategoryPage from './Components/Pages/Comic/CategoryPage';
import { ComicPage } from './Components/Pages/Comic/ComicPage';
import OrderPage from './Components/Pages/OrderPage';



function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Signup/>}/>
        <Route path="/category/:categoryName" element={<CategoryPage/>}/>
        <Route path='/comic/:comicId' element={<ComicPage/>}/>
        <Route path='orders' element={<OrderPage/>}/>
      </Routes>
    </BrowserRouter>
  </div> 
  );
}

export default App;
