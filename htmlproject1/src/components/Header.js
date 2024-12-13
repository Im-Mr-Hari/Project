import {Routes, Route, Link} from 'react-router-dom';
import './App.css';
import CarDetails from './pages/CarDetails';

function Header() {
    return ( 
        <div className="App">
            <div>
                <header className='menu'>
                    <div className='nav'>
                        <img src='./img/logo.jpg' alt='logo' className='logo'/>
                        <nav className='nav'>
                        <Link to="/" className="item">HOME</Link>
                        <Link to="/cardetails" className="item">NEWCAR</Link>
                        <Link to="/" className="item">BRANDS</Link>
                        <Link to="/" className="item">USED</Link>
                        <Link to="/" className="item">OFFER</Link>
                        </nav>
                    </div>
                    <div className='nav'>
                        <nav className='nav-item'>
                        <Link to="/contact" className="item">CONTACT</Link>
                        <Link to="/faq" className="item">FAQ</Link>
                        </nav>
                    </div>
                </header>
                <Routes>
                    <Route path='/'/>
                    <Route path='/cardetails' element={<CarDetails/>}/>
                    <Route path='/'/>
                    <Route path='/'/>
                </Routes>
            </div>    
        </div>
    );
}

export default Header;