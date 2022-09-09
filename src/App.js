
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import './reset.css';
import { Routes, Route, BrowserRouter, } from 'react-router-dom';
import Header from './components/Header'
import Home from './pages/Home';
import Contactus from './pages/Contactus';
import Menu from './pages/Menu';
import Details from './pages/Details';
import Cart from './pages/Cart';
import Footer from './components/Footer';




function App() {
  return (
    <div >

      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/ReactProject/' >
            <Route index element={<Home />}></Route>
            <Route path='contactus' element={<Contactus />}></Route>
            <Route path='menu' element={<Menu />} ></Route>
            <Route path='menu/:menuID' element={<Details />} ></Route>
            <Route path='cart' element={<Cart />} ></Route>
            
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />

<div>
  
</div>

    </div>


  );
}

export default App;
