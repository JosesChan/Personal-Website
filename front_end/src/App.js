import NavMenu from './components/NavMenu';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import AboutContent from './pages/AboutPage';
import ProjectsContent from './pages/ProjectPage';
import HobbiesContent from './pages/HobbiesPage';
import ContactContent from './pages/ContactPage';
import RecordList from './components/recordList';
import Edit from "./components/edit";
import Create from "./components/create";
import BlogList from "./components/BlogList";
import BlogPost from "./components/BlogPost";
import CreateBlog from "./components/CreateBlog";
import EditBlog from "./components/EditBlog";
import React, {Fragment} from "react";


function App() {
  return (
    <Fragment>  
        <NavMenu />
          {/* <div className="absolute inset-0 -z-10 w-full px-5 py-24 bg-radial-gradient-top"> */}
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<AboutContent />} />
              <Route path='/Projects' element={<ProjectsContent />} />
              <Route path='/Hobbies' element={<HobbiesContent />} />
              <Route path='/Contact' element={<ContactContent />} />
              <Route path='/Records' element={<RecordList/>} />
              <Route path="/edit/:id" element={<Edit />} />
              <Route path='/Create' element={<Create />} />
              <Route path='/blog' element={<BlogList />} />
              <Route path='/blog/:id' element={<BlogPost />} />
              <Route path='/blog/create' element={<CreateBlog />} />
              <Route path='/blog/edit/:id' element={<EditBlog />} />
            </Routes>
          {/* </div> */}
    </Fragment>
  )
}

export default App;