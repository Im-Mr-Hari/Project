import { Routes, Route, Link } from 'react-router-dom'
import FAQComponent from './FAQ'
import '@fortawesome/fontawesome-free/css/all.min.css';
import NewCarMenu from './pages/NewCarMenu';

function Newcar() {

    return (
        <div>
            <div className="space-white"></div>
            <header>
                <div className='nav-page'>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9">
                        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
                        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
                    </svg>
                    <Link className='a' to="/">
                        <span className='content_nav-page not'>Home</span>
                    </Link>
                    <svg className='chevron-right' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
                        <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
                    </svg>
                    <span className='content_nav-page'>Buy a car</span>
                </div>

                {/* carousel car logo */}
                <div className="brands-search">
                    <div className="brands-logo">
                        <a href=""><img src="../img/Hondalogo.jpg" alt="Honda" /></a>
                    </div>
                    <div className="brands-logo">
                        <a href=""><img src="../img/KIAlogo.jpg" alt="KIA" /></a>
                    </div>
                    <div className="brands-logo">
                        <a href=""><img src="../img/Teslalogo.jpg" alt="Tesla" /></a>
                    </div>
                    <div className="brands-logo">
                        <a href=""><img src="../img/ferrarilogo.jpg" alt="Ferrari" style={{ width: "160px" }} /></a>
                    </div>
                    <div className="brands-logo">
                        <a href=""><img src="../img/fordlogo.jpg" alt="Ford" /></a>
                    </div>
                </div>

            </header>

            {/* result bar */}
            <div className="bar-results">
                <p className='num-results'>34 results</p>
            </div>

            {/* search bar */}
            <div className='search-car'>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-11">
                    <path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd" />
                </svg>
                <input type="text" placeholder='Search for name car' />
            </div>

            {/* show car  */}
            <main>
                <div className="show-car_container">
                    {/*  filter box */}
                    <div className="filter-box_container">
                        <p className='title-search'>All Brands</p>
                        <select name="" id="" defaultValue="">
                            <option value="" disabled>Select one</option>
                            <option value="option1">Option 1</option>
                            <option value="option2">Option 2</option>
                        </select>

                        <p className='title-search'>Model</p>
                        <input type="text" placeholder='Enter vehicle model' />

                        <p className='title-search'>Price</p>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <input className='mini-price' type="text" placeholder='minimum' />
                            <input className='max-price' type="text" placeholder='maximum' />
                        </div>

                        <p className='title-search'>Year of manufacture</p>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <input className='mini-price' type="text" placeholder='From Year' />
                            <input className='max-price' type="text" placeholder='To Year' />
                        </div>

                        <p className='title-search'>Number of kilometers traveled</p>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <input className='mini-price' type="text" placeholder='minimum km' />
                            <input className='max-price' type="text" placeholder='maximum km' />
                        </div>

                        <p className='title-search'>Fuel</p>
                        <select name="" id="">
                            <option value="" selected>All fuel types</option>
                            <option value="">Xang</option>
                            <option value="">Electronic</option>
                        </select>

                        <p className='title-search'>Car Shape</p>
                        <select name="" id="">
                            <option value="" selected>All body types</option>
                        </select>

                        <p className='title-search'>Gear</p>
                        <select name="" id="">
                            <option value="" selected>------------</option>
                        </select>

                        <p className='title-search'>Capacity</p>
                        <div style={{ display: "flex", gap: "20px" }}>
                            <input className='mini-price' type="text" placeholder='minimum' />
                            <input className='max-price' type="text" placeholder='maximum' />
                        </div>

                        <p className='title-search'>Sort by</p>
                        <select name="" id="">
                            <option value="" selected>------------</option>
                        </select>

                        <button className='btn-filter'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-13">
                                <path fill-rule="evenodd" d="M3.792 2.938A49.069 49.069 0 0 1 12 2.25c2.797 0 5.54.236 8.209.688a1.857 1.857 0 0 1 1.541 1.836v1.044a3 3 0 0 1-.879 2.121l-6.182 6.182a1.5 1.5 0 0 0-.439 1.061v2.927a3 3 0 0 1-1.658 2.684l-1.757.878A.75.75 0 0 1 9.75 21v-5.818a1.5 1.5 0 0 0-.44-1.06L3.13 7.938a3 3 0 0 1-.879-2.121V4.774c0-.897.64-1.683 1.542-1.836Z" clip-rule="evenodd" />
                            </svg>
                            <span>Apply filter</span>
                        </button>
                        <button className='btn-reset'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-13">
                                <path fill-rule="evenodd" d="M4.755 10.059a7.5 7.5 0 0 1 12.548-3.364l1.903 1.903h-3.183a.75.75 0 1 0 0 1.5h4.992a.75.75 0 0 0 .75-.75V4.356a.75.75 0 0 0-1.5 0v3.18l-1.9-1.9A9 9 0 0 0 3.306 9.67a.75.75 0 1 0 1.45.388Zm15.408 3.352a.75.75 0 0 0-.919.53 7.5 7.5 0 0 1-12.548 3.364l-1.902-1.903h3.183a.75.75 0 0 0 0-1.5H2.984a.75.75 0 0 0-.75.75v4.992a.75.75 0 0 0 1.5 0v-3.18l1.9 1.9a9 9 0 0 0 15.059-4.035.75.75 0 0 0-.53-.918Z" clip-rule="evenodd" />
                            </svg>
                            <span>Reset filter</span>
                        </button>
                    </div>

                    {/* cars */}
                    <div>
                        <NewCarMenu/>
                    </div>
                </div>

                {/* box nav car-page  */}
                <div className="box_nav-pageCar">
                    <div className='nav-pageCar-item-1'>
                        <p style={{ marginBottom: "0" }}>Page 1 from 3</p>
                    </div>
                    <div className='nav-pageCar-item-2'>
                        <p style={{ marginBottom: "0" }}>Next</p>
                    </div>
                    <div className='nav-pageCar-item-3'>
                        <p style={{ marginBottom: "0" }}>Final</p>
                    </div>
                </div>

            </main>

            {/* footer */}
            <footer>
                <div className="container_footer">
                    <div className='col-left_footer'>
                        <img className='logo logo-footer' src="../img/Group_193-removebg-preview.png" alt="" />
                        <p className='slogan'>With the motto of bringing customers more value and simplifying the car buying process. </p>
                        <div className='social-box'>
                            <img className='logo-social' src="../img/icon-FB.svg" alt="" />
                            <img className='logo-social' src="../img/icon-INS.svg" alt="" />
                            <img className='logo-social' src="../img/icon-yt.svg" alt="" />
                            <img className='logo-social' src="../img/icon-twiiter.svg" alt="" />
                        </div>
                    </div>

                    <div className='col-page'>
                        <p className='title-footer'>Page</p>
                        <Link className='hover-footer' to="/newCar">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-11">
                                    <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                                    <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clip-rule="evenodd" />
                                </svg>
                                <span>Search</span>
                            </div>
                        </Link>

                        <Link className='hover-footer' to="/FAQ">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-11">
                                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                </svg>
                                <span>FAQ</span>
                            </div>
                        </Link>

                        <a className='hover-footer' href="">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-11">
                                    <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                </svg>
                                <span>About</span>
                            </div>
                        </a>
                    </div>

                    <div className='col-page contact'>
                        <p className='title-footer'>Contact Us</p>
                        <a className='hover-footer' href="">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-11">
                                    <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                    <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                </svg>
                                <span>carbreezyCar@gmail.com</span>
                            </div>
                        </a>

                        <a className='hover-footer' href="">
                            <div>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-11">
                                    <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                                </svg>
                                <span>Hotline: <u>0825 355 355</u></span>
                            </div>
                        </a>
                    </div>
                </div>

                <hr className='hr-footer' />
                <p className='right'><span className='color'>©CarBreezy</span> 2024. All rights reserved.</p>
                <marquee width="100%" direction="left" height="20px">
                    10/12/2024 - 08:07 - TPHCM
                </marquee>
            </footer>

            <Routes>
                <Route path='/FAQ' element={<FAQComponent />}></Route>
            </Routes>
        </div>
    );
}

export default Newcar;