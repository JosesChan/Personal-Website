import NavMenu from './components/NavMenu';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import AboutContent from './pages/AboutPage';
import ProjectsContent from './pages/ProjectPage';
import HobbiesContent from './pages/HobbiesPage';
import ContactContent from './pages/ContactPage';
import RecordList from './components/RecordList';
import Edit from "./components/edit";
import Create from "./components/create";
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
            </Routes>
          {/* </div> */}
    </Fragment>
  )
}

export default App;