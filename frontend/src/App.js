import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './Components/Pages/Home';
import Signup from './Components/Pages/Signup/Signup';
import CategoryPage from './Components/Pages/Comic/CategoryPage';
import { ComicPage } from './Components/Pages/Comic/ComicPage';
import OrderPage from './Components/Pages/OrderPage';
import AdminPage from './Components/Pages/Admin/AdminPage';
import AddComic from './Components/Pages/Admin/AddComic';
import EditComic from './Components/Pages/Admin/EditComic';



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
        <Route path='/admin' element={<AdminPage/>}/>
        <Route path='/add-comic' element={<AddComic/>}/>
        <Route path='/edit-comic' element={<EditComic/>}/>
      </Routes>
    </BrowserRouter>
  </div> 
  );
}

export default App;
