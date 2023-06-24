import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import PageNotFound from './pages/PageNotFound';
import Services from './pages/Services'
import Homepage from './pages/Homepage';
import Faq from './pages/Faq';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/services' element={<Services />} />
        <Route path='/about-us' element={<About />} />
        <Route path='/contact-uss' element={<ContactUs />} />
        <Route path='*' element={<PageNotFound />} />
        <Route path='/faq' element={<Faq />} />        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
