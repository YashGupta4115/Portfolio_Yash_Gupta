import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/home.component.jsx';
import Projects from './Components/Projects/projects.component.jsx';
import About from './Components/About/about.component.jsx';
import Contact from './Components/Contact/contact.component.jsx';
import Certificates from './Components/Certificates/certificates.component.jsx';
import { pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.js',
  import.meta.url,
).toString();

const App = () => {
  return (
    <Routes>
      <Route index element={<Home/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/certificates' element={<Certificates/>}/>
    </Routes>
  );
}

export default App;
