import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import Blog from './Pages/Blog';
import About from './Pages/About';
import Home from './Pages/Home';
import EditBlog from './Pages/EditBlog';
import { ToastContainer } from 'react-bootstrap';

function App() {
  return (
    <>
    <ToastContainer/>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/edit-blog' element={<EditBlog/>}/>

        <Route path='/about' element={<About/>}/>

      </Routes>
     
      <Footer/>
    
    </>
  );
}

export default App;
