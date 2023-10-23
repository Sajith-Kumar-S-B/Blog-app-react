import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router';
import Home from './Pages/Home';
import EditBlog from './Pages/EditBlog';
import OneBlog from './components/singleblog/OneBlog';
import Blog from './Pages/Blog/Blog';
import AddBlog from './components/EditBlog/AddBlog';


function App() {
  return (
    <>
  
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/oneblog/:id' element={<OneBlog/>}/>

        <Route path='/edit-blog' element={<EditBlog/>}/>
        <Route path='/edit-blog/:id' element={<AddBlog/>}/>


        <Route path='/blogs' element={<Blog/>}/>

      </Routes>
     
      <Footer/>
    
    </>
  );
}

export default App;
