
import Contact from './components/Contact';
import About from './components/About';
import ImageCarousel from './components/ImageCarousel';
import Header from './components/Header';
import Footer from './pages/home/Footer';
import Home from './pages/home/Home';
import {Route,Routes} from 'react-router-dom'
import { BrowserRouter as Router } from 'react-router-dom';
import RegisterForm from './components/Register';
import Blog from './components/Blog';
import Services from './components/Services';
import Support from './components/Support';
import Refund from './components/Refund';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsAndConditions from './components/TermsAndConditions';
import { MdOutlinePrivacyTip } from 'react-icons/md';
import EnquireForm from './components/Form';
import WhatsApp from './components/Whatsapp';

function App() {
  return (
    <>
     <Header/>
     <Router>
      <Routes>
        <Route exact path='/' element={<Home/>} index/>
        <Route exact path='/contact' element={<Contact/>}/>
        <Route exact path='/about' element={<About/>}/>
        <Route exact path='/register' element={<RegisterForm/>}/>
        <Route exact path='/blog' element={<Blog/>}/>
        <Route exact path='/service' element={<Services/>}/>
        <Route exact path='/support' element={<Support/>}/>
        <Route exact path='/refund' element={<Refund/>}/>
        <Route exact path='/terms' element={<TermsAndConditions/>}/>
        <Route exact path='/privacy' element={<PrivacyPolicy/>}/>
      </Routes> 
  </Router>
    <WhatsApp/>
    <Footer/>
    
    
    </>
  );
}

export default App;
