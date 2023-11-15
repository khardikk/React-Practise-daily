import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import User from './Components/User';

function App() {

  return (
    <Router>
      
        <Header />

    <Routes>

       <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/user/tempId' element={<User />} />
    </Routes>
    
    <Footer />
    </Router>
   
  );
}

export default App
