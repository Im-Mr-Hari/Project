import { Link, Routes, Route } from 'react-router-dom'
import React, {useState} from 'react';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch, faPhone } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import CUV from './CUV';
import SUV from './SUV';
import MPV from './MPV';
import SEDAN from './SEDAN';
import PICKUP from './PICKUP';
import SUPERCAR from './SUPERCAR';

function UsedCar() {
    const nav = useNavigate();
    const cars = 
      [
        {
            id: "36",
            brand:"Ford",
            name: "Ford Everest Sport 2.0L AT 4x2 2021",
            model: "SUV",
            price: 25000,
            newcarPrice: 39000,
            seats: 7,
            fuel: "Diesel",
            transmission:"10-speed automatic",
            height:"1837 mm",
            width: "1860 mm",
            length:"4892 mm",
            color:"Black",
            imgSrc:"./img/ford01.jpg", 
            year: 2021        
        },
        {
            id: "37",
            brand:"Ford",
            name: "Ford Everest Titanium 2.0L AT 4x2 2021",
            model: "SUV",
            price: 26000,
            newcarPrice: 39500,
            seats: 7,
            fuel: "Diesel",
            transmission:"10-speed automatic",
            height:"1837 mm",
            width: "1860 mm",
            length: "4892 mm",
            color:"Blue",
            imgSrc:"./img/ford06.jpg", 
            year: 2021
        },
        {
            id: "38",
            brand:"Ford",
            name: "Ford Ranger XLS 2.2L 4x2 AT 2020",
            model: "PICKUP",
            price: 18250,
            newcarPrice: 23520,
            seats: 7,
            fuel: "Diesel",
            transmission:"10-speed automatic",
            height:"1830 mm",
            width: "1860 mm",
            length: "5362 mm",
            color: "Black",
            imgSrc:"./img/ford16.jpg", 
            year: 2020
        },
        {
            id: "39",
            brand:"HONDA",
            name: "Honda Brio RS 2021",
            model: "Hatchback",
            price: 11000,
            newcarPrice: 16100,
            seats: 5,
            fuel: "Gasoline",
            transmission:"CVT",
            height:"1487 mm",
            width: "1682 mm",
            length: "3817 mm",
            color: "White",
            imgSrc:"./img/honda01.jpg", 
            year: 2021
        },
        {
            id: "40",
            brand:"HONDA",
            name: "Honda City L 2023",
            model: "SEDAN",
            price: 12520,
            newcarPrice: 20500,
            seats: 5,
            fuel: "Gasoline",
            transmission:"CVT",
            height:"1467 mm",
            width: "1748 mm",
            length: "4580 mm",
            color: "Green",
            imgSrc:"./img/honda06.jpg", 
            year: 2023
        },
        {
            id: "41",
            brand:"KIA",
            name: "Kia Carens 1.4T SIGNATURE 2023",
            model: "SUV",
            price: 22000,
            newcarPrice: 30000,
            seats: 7,
            fuel: "Gasoline",
            transmission:"7DCT",
            height:"1750 mm",
            width: "1800 mm",
            length: "4540 mm",
            color: "White",
            imgSrc:"./img/kia01.jpg", 
            year: 2023
        },
        {
            id: "42",
            brand:"KIA",
            name: "Kia Rondo GAT 2022",
            model: "MPV",
            price: 15700,
            newcarPrice: 21666,
            seats: 7,
            fuel: "Gasoline",
            transmission:"Automatic",
            height:"1610 mm",
            width: "1805 mm",
            length: "4525 mm",
            color: "",
            imgSrc:"./img/kia21.jpg", 
            year: 2022
        },
    
        {
            id: "43",
            brand:"MAZDA",
            name: "Mazda 3 1.5 Premium Sport 2020",
            model: "HATCHBACK",
            price: 19500,
            newcarPrice: 24000,
            seats: 5,
            fuel: "Gasoline",
            transmission:"Automatic",
            height:"1445 mm",
            width: "1795 mm",
            length: "4465 mm",
            color: "White",
            imgSrc:"./img/mazda06.jpg", 
            year: 2020 
        },
        {
            id: "44",
            brand:"MAZDA",
            name: "Mazda CX-5 2.0L Premium 2022",
            model: "SUV",
            price: 21.000,
            newcarPrice: 32000,
            seats: 5,
            fuel: "Gasoline",
            transmission:"Automatic",
            height:"1680 mm",
            width: "1840 mm",
            length: "4550 mm",
            color: "Red",
            imgSrc:"./img/mazda21.jpg", 
            year: 2022
        },
        {
            id: "45",
            brand:"TESLA",
            name: "Tesla Model 3",
            model: "SEDAN",
            price: 28000,
            newcarPrice: 45000,
            seats: 5,
            fuel: "Electric",
            transmission:"Automatic",
            height:"1443 mm",
            width: "1933 mm",
            length: "4694 mm",
            color: "White",
            imgSrc:"./img/tesla06.jpg", 
            year: 2021
        },
        {
            id: "46",
            brand:"KIA",
            name: "Kia Sonet 1.5 Premium 2022",
            model: "SUV",
            price: 10250,
            newcarPrice: 15000,
            seats: 5,
            fuel: "Gasoline",
            transmission:"CVT",
            height:"1642 mm",
            width: "1790 mm",
            length: "4120 mm",
            color: "Red",
           imgSrc:"./img/kia26.jpg", 
            year: 2022
        },
        {
            id: "47",
            brand:"MAZDA",
            name: "Mazda CX-5 2.0 AT 2016",
            model: "CUV",
            price: 32150,
            newcarPrice: 39.000,
            seats: 5,
            fuel: "Gasoline",
            transmission:"6-speed Automatic",
            height:"1680 mm",
            width: "1840 mm",
            length: "4555 mm",
            color: "Black",
           imgSrc:"./img/mazda26.jpg", 
            year: 2016
        },
    ]; 
        const handleCarClick = (id) => {
            nav(`/usedcar/${id}`);
        };
    return ( 
        <div>
            <div className="brands-search">
                <div className="brands-logo">
                    <a href=""><img src="./img/Hondalogo.jpg" alt="Honda" /></a>
                </div>
                <div className="brands-logo">
                    <a href=""><img src="./img/KIAlogo.jpg" alt="KIA" /></a>
                </div>
                <div className="brands-logo">
                    <a href=""><img src="./img/Teslalogo.jpg" alt="Tesla" /></a>
                </div>
                <div className="brands-logo">
                    <a href=""><img src="./img/ferrarilogo.jpg" alt="Ferrari" style={{width: "160px"}}/></a>
                </div>
                <div className="brands-logo">
                    <a href=""><img src="./img/fordlogo.jpg" alt="Ford" /></a>
                </div>
            </div>
            <div>
                <div className='search-filter'>
                    <div className='search'>
                        <FontAwesomeIcon icon={faSearch} className='search-icon'/>
                        <input type="text" placeholder="Enter Car Model" />
                    </div>
                    <div className="mb-filter">
                        Filter 
                        <FontAwesomeIcon icon={faFilter} style={{marginLeft: "8px"}}/>
                    </div>
                </div>                
                <div className='brands-class'>
                    <div className='brands'>
                        Brands: 
                        <a href="">HONDA</a>
                        <a href="">KIA</a>
                        <a href="">TESLA</a>
                        <a href="">FERRARI</a>
                        <a href="">FORD</a>
                    </div>
                    <div className='class'>
                        Class: 
                        <Link to="/cuv" >CUV</Link>
                        <Link to="/suv">SUV</Link>
                        <Link to="/mpv">MPV</Link>
                        <Link to='/sedan'>SEDAN</Link>
                        <Link to='/pickup'>PICKUP</Link>
                        <Link to='/supercar'>SUPERCAR</Link>
                    </div>
                </div>
            </div>
            <div className='used-view'>
                <div className="car-list">
                    {cars.map((car) => (
                        <div className="car-card" key={car.id} onClick={()=> handleCarClick(car.id)}> 
                        <img src={car.imgSrc} alt={car.name} className="car-image" />
                            <div className="car-info">
                                <h2 className="car-name">{car.name}</h2>
                                <p>
                                <strong>Price:</strong> {car.price}
                                </p>
                                <p>
                                <strong>New Car Price:</strong> {car.newcarPrice}
                                </p>
                                <p>
                                <strong>Fuel:</strong> {car.fuel}
                                </p>
                                <p>
                                <strong>Seats:</strong> {car.seats}
                                </p>
                                <p>
                                <strong>Year:</strong> {car.year}
                                </p>
                                <p>
                                <strong>Transmission:</strong> {car.transmission}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>              
            </div>
            <div>
                <div className='cant-info'>
                    <div  className='cant-info1'>
                        <div>
                            <span style={{float:"left"}}>
                                <h3>Can't find the car you want? Contact CarBreezy to get personalized car search results</h3>
                            </span>
                        </div>                    
                        <div className='cant-info2'>
                            <div>
                                <span>
                                    <h4>You can contact with CarBreezy througb the following channels: </h4>
                                </span>
                            </div>
                            <div>
                                <div className='cant-info3'>
                                    <FontAwesomeIcon icon={faPhone} style={{color: "#FFF", margin: "0 20px"}}/>
                                    <span>0825 355 355</span>
                                </div>
                                <div className='cant-info3'>
                                    <FontAwesomeIcon icon={faTwitter} style={{color: "#FFF", margin: "0 20px"}}/>
                                    <span>@CarBreezy</span>
                                </div>
                                <div className='cant-info3'>
                                    <FontAwesomeIcon icon={faFacebook} style={{color: "#FFF", margin: "0 20px"}}/>
                                    <span>@CarBreezy</span>
                                </div>                            
                            </div>
                            <div className='or'>
                                <hr style={{width: "20%", color: "gray", margin:"20px 5px"}}/>
                                <span>Or</span>
                                <hr style={{width: "80%", color: "gray", margin:"20px 5px"}}/>
                            </div>
                            <div className='yr-info'>
                                <span>Leave your information</span>
                                <input type="text" placeholder='Enter your phone number'/>
                                <button>Submit information</button>
                            </div>
                        </div>
                    </div>                     
                    <div class="suv-clear">
                        <div class="suv-clear1">
                            <div class="suv-clear2">
                                <hr class="shr-line" />
                                <h1>SUV Clearance Sale</h1>
                                <button><a href="#">Buy Now</a></button>
                            </div>
                            <img src="./img/SUV.jpg" alt="SUV Clearance Sale" />
                        </div>
                    </div>                                    
                </div>                
            </div>
            <div className='used-intro'>
                <div className="used-buysell">
                    <h1>Buy and sell used cars</h1>
                </div>
                <div className='used-intro1'>
                    <div>
                        <h2 style={{textAlign: "center"}}>Buy and sell used cars, used cars at good prices</h2>
                    </div>
                    <div className='used-intro2'>
                        <span>
                            Nowadays, customers have many options <strong><u>to buy used cars</u></strong> from many different sources. Many customers choose to buy from individuals or from used car dealers. Cars are a big asset so many people have to think carefully especially when buying a used car. So why should people choose to buy at CarBreezy compared to other places.
                        </span>
                        <span>
                            <h3>Why should you choose Carpla when buying a used car?</h3>
                        </span>
                        <span>
                            <h3>Good warranty</h3>
                        </span>
                        <span>
                            When customers buy a used car at CarBreezy, they will receive a 1-year or 20,000km warranty. In case the car is still under warranty at the manufacturer, customers can still use this service. When buying a used car from an acquaintance, customers will definitely not receive this policy. Buying a car at Carpla brings absolute peace of mind and trust
                        </span>
                        <span>
                            <h3>Strict inspection</h3>
                            The <strong><u>purchase of used cars</u></strong> must go through strict inspection steps. At each stage, experts compare documents to verify the vehicle's history, ensuring that the vehicle sold has a chassis number and engine number that match the legal documents. The engine and electrical system are all checked with error reading equipment to ensure that the vehicle is eligible for operation. The chassis and undercarriage must be checked to ensure that the vehicle has never been in an accident, collision or water hammer.
                        </span>
                        <span>
                            <h3>Fast and free procedure</h3>
                            All procedures related to notarized sales contracts and withdrawal of documents are free at CarBreezy. In addition, CarBreezy staff support customers with procedures for changing ownership and registration to help customers quickly receive their cars. Customers can be completely assured when buying used cars at CarBreezy.
                        </span>
                        <span>
                            <h3>Long-term loan policy</h3>
                            The highlight when buying a used car at CarBreezy is that customers will be able to pay in installments with the longest term on the market. CarBreezy also cooperates with many banks to support customers with loan value up to 70% of the car value and preferential interest rates. <br/>
                            CarBreezy  affirms that user value is the top priority, which also helps CarBreezy become the most prestigious used car buying and selling platform in Vietnam. You can contact CarBreezy to receive more advice from the staff. <br/>
                            Collapse
                        </span>
                    </div>
                </div>
            </div>
            <Routes>
                <Route path='/cuv' element={<CUV/>}/>
                <Route path='/suv' element={<SUV/>}/>
                <Route path='/mpv' element={<MPV/>}/>
                <Route path='/sedan' element={<SEDAN/>}/>
                <Route path='/pickup' element={<PICKUP/>}/>
                <Route path='/supercar' element={<SUPERCAR/>}/>
            </Routes>
        </div>
     );
}

export default UsedCar;