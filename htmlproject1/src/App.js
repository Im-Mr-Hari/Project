import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react'; // Import useEffect

import FAQComponent from './FAQ';
import UsedCar from './pages/UsedCar';
import Home from './Home';
import Newcar from './Newcar';
import Offers from './Offers';
import CarDetails from './pages/CarDetails';
import Honda from './pages/Honda';
import Ford from './pages/Ford';
import Kia from './pages/Kia';
import Mazda from './pages/Mazda';
import Tesla from './pages/Tesla';
import Ferrari from './pages/Ferrarri';
import ContactUs from './ContactUs';
import './App.css';
import CUV from './pages/CUV';
import SUV from './pages/SUV';
import MPV from './pages/MPV';
import PICKUP from './pages/PICKUP';
import SUPPERCAR from './pages/SUPERCAR';

function App() {
  const location = useLocation(); // Get current location

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top when route changes
  }, [location]); // Re-run when location changes

  return (
    <div className="App">
      <nav>
        <label htmlFor="check-menu">
          <svg style={{ color: "#fff" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </label>
        <input style={{ display: "none" }} className='menu-input' type='checkbox' id="check-menu" />
        <label htmlFor="check-menu" className='overlay'></label>

        <div className='logo_container'>
          <Link to="/"><img className='logo' src="../img/Group_193-removebg-preview.png" alt="" /></Link>
        </div>

        <div className='nav-left'>
          <Link className='link' to="/">Home</Link>
          <Link className='link' to="/newCar">Newcar</Link>
          <div className="navbar">
            <div className="navbar-container">
              <div className="dropdown">
                <button className="dropdown-toggle">Brands</button>
                <ul className="dropdown-menu">
                  <li><a href="/honda" className="dropdown-item">Honda</a></li>
                  <li><a href="/kia" className="dropdown-item">KIA</a></li>
                  <li><a href="/ford" className="dropdown-item">Ford</a></li>
                  <li><a href="/tesla" className="dropdown-item">Tesla</a></li>
                  <li><a href="/ferrari" className="dropdown-item">Ferrari</a></li>
                  <li><a href="/mazda" className="dropdown-item">Mazda</a></li>
                </ul>
              </div>
            </div>
          </div>
          <Link className='link' to="/usedcar">Used</Link>
          <Link className='link' to="/offers">Offer</Link>
        </div>

        <div className='nav-right'>
          <Link className='link' to="/contact">Contact</Link>
          <Link className='link' to="/FAQ">FAQ</Link>
        </div>

        {/* navbar for tablet & mobile */}
        <div className='mobile-tablet_menu'>
          <div className='res_header-menu'>
            <img className='logo logo-menu' src="../img/Group_193-removebg-preview.png" alt="" />
            <label htmlFor="check-menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </label>
          </div>

          <hr style={{ marginTop: "-10px" }} />
          <ul style={{ marginTop: "0px" }}>
            <Link style={{ textDecoration: "none" }} to="/newCar">
              <div className='box-li-span_menu'>
                <li><span>Newcar</span></li>
              </div>
            </Link>
            <div className="box-li-span_menu">
              <li>
                <div className="navbar">
                  <div className="navbar-container">
                    <div className="dropdown">
                      <button className="dropdown-toggle brands-res">Brands</button>
                      <ul className="dropdown-menu">
                        <li><Link to="/honda" className="dropdown-item">Honda</Link></li>
                        <li><Link to="/kia" className="dropdown-item">KIA</Link></li>
                        <li><Link to="/ford" className="dropdown-item">Ford</Link></li>
                        <li><Link to="/tesla" className="dropdown-item">Tesla</Link></li>
                        <li><Link to="/ferrari" className="dropdown-item">Ferrari</Link></li>
                        <li><Link to="/mazda" className="dropdown-item">Mazda</Link></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
            </div>
            <Link style={{ textDecoration: "none" }} to="/usedcar">
              <div className='box-li-span_menu'>
                <li><span>Used</span></li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/offers">
              <div className='box-li-span_menu'>
                <li><span>Offers</span></li>
              </div>
            </Link>
          </ul>
        </div>
      </nav>

      {/* Routes and ScrollRestoration */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newCar" element={<Newcar />} />
        <Route path="/FAQ" element={<FAQComponent />} />
        <Route path="/usedcar" element={<UsedCar />} />
        <Route path="/offers" element={<Offers />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path='/cardetails' element={<CarDetails />} />
        <Route path='/honda' element={<Honda />} />
        <Route path='/ford' element={<Ford />} />
        <Route path='/kia' element={<Kia />} />
        <Route path='/mazda' element={<Mazda />} />
        <Route path='/tesla' element={<Tesla />} />
        <Route path='/ferrari' element={<Ferrari />} />

        <Route path='/usedcar/CUV' element={<CUV />} />
        <Route path='/usedcar/SUV' element={<SUV />} />
        <Route path='/usedcar/MPV' element={<MPV />} />
        <Route path='/usedcar/SEDAN' element={<MPV />} />
        <Route path='/usedcar/PICKUP' element={<PICKUP />} />
        <Route path='/usedcar/SUPPER-CAR' element={<SUPPERCAR />} />

      </Routes>
    </div>
  );
}

export default App;
