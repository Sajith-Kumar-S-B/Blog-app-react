import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import EditBlog from './Pages/EditBlog';
import OneBlog from './components/singleblog/OneBlog';
import Blog from './Pages/Blog/Blog';
import AddBlog from './components/EditBlog/AddBlog';
import NotFound from './components/NotFound/NotFound';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className='app'>
  
      <Header/>
      <ToastContainer position='top-center'
          theme='colored' autoClose={2000} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/oneblog/:id' element={<OneBlog/>}/>

        <Route path='/edit-blog' element={<EditBlog/>}/>
        <Route path='/edit-blog/:id' element={<AddBlog/>}/>


        <Route path='/blogs' element={<Blog/>}/>
        <Route path='*' element={<NotFound/>}/>
        
          
      </Routes>
     
      <Footer/>
    
    </div>
  );
}

export default App;
