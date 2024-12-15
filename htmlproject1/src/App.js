import FAQComponent from './FAQ';
import UsedCar from './pages/UsedCar';
import Home from './Home';
import Newcar from './Newcar';
import Logo from './asets/Group_193-removebg-preview.png'
import { Link, Routes, Route } from 'react-router-dom'
import './App.css';

import CarDetails from './pages/CarDetails';
import CarDetails2 from './pages/CarDetails2';

function App() {
  return (
    <div className="App">
      <nav>
        <label for="check-menu">
          <svg style={{ color: "#fff" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
            <path fillRule="evenodd" d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z" clipRule="evenodd" />
          </svg>
        </label>


        <input style={{ display: "none" }} className='menu-input' type='checkbox' id="check-menu" />

        <label for="check-menu" className='overlay'></label>

        <div className='logo_container'>
          <Link to="/"><img className='logo' src={Logo} alt="" /></Link>
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
          <Link className='link' to="/cardetails2">Offer</Link>
        </div>


        <div className='nav-right'>
          <Link className='link' to="">Contact</Link>
          <Link className='link' to="/FAQ">FAQ</Link>
        </div>

        {/* navbar for tablet & mobile */}
        <div className='mobile-tablet_menu'>
          <div className='res_header-menu'>
            <img className='logo logo-menu' src={Logo} alt="" />

            <label for="check-menu">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-7">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
              </svg>
            </label>
          </div>

          <hr style={{ marginTop: "-10px" }} />

          <ul style={{ marginTop: "0x" }}>
            <Link style={{ textDecoration: "none" }} to="/newCar">
              <div className='box-li-span_menu'>
                <li>
                  <span>Newcar</span>
                </li>
              </div>
            </Link>
            <div className='box-li-span_menu'>
              <li>
                <div className="navbar">
                  <div className="navbar-container">
                    <div className="dropdown">
                      <button className="dropdown-toggle brands-res">Brands</button>
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
              </li>
            </div>
            <Link style={{ textDecoration: "none" }} to="">
              <div className='box-li-span_menu'>
                <li>
                  <span>Used</span>
                </li>
              </div>
            </Link>
            <Link style={{ textDecoration: "none" }} to="">
              <div className='box-li-span_menu'>
                <li>
                  <span>Offers</span>
                </li>
              </div>
            </Link>
          </ul>
        </div>

      </nav >

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/newCar" element={<Newcar />} />
        <Route path="/FAQ" element={<FAQComponent />} />
        <Route path="/usedcar" element={<UsedCar/>}/>
        <Route path='/cardetails2' element={<CarDetails2/>}/>
      </Routes>


    </div >
  );
}

export default App;
