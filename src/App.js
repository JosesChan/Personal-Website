import NavMenu from './components/NavMenu';
import ComponentPrototyping from './components/ComponentPrototyping';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/HomePage';
import AboutContent from './pages/AboutPage';
import ProjectsContent from './pages/ProjectPage';
import ContactContent from './pages/ContactPage';

{/*Commenting out components 
    <ComponentPrototyping />, 
    <NavMenu />, 
    
      <div className='container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutContent />} />
          <Route path='/Projects' element={<ProjectsContent />} />
          <Route path='/Contact' element={<ContactContent />} />
        </Routes>
      </div>  
*/}

function App() {
  return (
    <>
      <NavMenu />
      
      <div className='mx-auto max-w-sm mt-36 container'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutContent />} />
          <Route path='/Projects' element={<ProjectsContent />} />
          <Route path='/Contact' element={<ContactContent />} />
        </Routes>
      </div>
    </>
  )
}

export default App;
