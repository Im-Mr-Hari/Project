import React, { useState } from 'react';
import { faFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faSearch, faTachometerAlt, faGasPump, faMapMarkerAlt, faUsers, faCar, faCogs, faPhone } from '@fortawesome/free-solid-svg-icons';

function Usedcar() {
    return (
        <div>
            <div className="brands-search">
                <div className="brands-logo">
                    <a href=""><img src="../img/Hondalogo.jpg" alt="Honda" /></a>
                </div>
                <div className="brands-logo">
                    <a href=""><img src="./img/KIAlogo.jpg" alt="KIA" /></a>
                </div>
                <div className="brands-logo">
                    <a href=""><img src="./img/Teslalogo.jpg" alt="Tesla" /></a>
                </div>
                <div className="brands-logo">
                    <a href=""><img src="./img/ferrarilogo.jpg" alt="Ferrari" style={{ width: "160px" }} /></a>
                </div>
                <div className="brands-logo">
                    <a href=""><img src="./img/fordlogo.jpg" alt="Ford" /></a>
                </div>
            </div>
            <div>
                <div className='search-filter'>
                    <div className='search'>
                        <FontAwesomeIcon icon={faSearch} className='search-icon' />
                        <input type="text" placeholder="Enter Car Model" />
                    </div>
                    <div className="mb-filter">
                        Filter
                        <FontAwesomeIcon icon={faFilter} style={{ marginLeft: "8px" }} />
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
                        <a href="">CUV</a>
                        <a href="">SUV</a>
                        <a href="">MPV</a>
                        <a href="">SEDAN</a>
                        <a href="">PICKUP</a>
                        <a href="">COUPE</a>
                        <a href="">SUPPER CAR</a>
                    </div>
                </div>
            </div>
            <div className='used-view'>
                <div className='used-containt'>
                    <div className='used-containt2'>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='used-containt2'>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='used-containt2'>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='used-containt2'>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                        <div className='used-containt3'>
                            <div>
                                <img src="./img/ford1.jpg" alt="pic" />
                            </div>
                            <div>
                                <span><h3>FORD</h3></span>
                            </div>
                            <div>
                                <span><h3>2000$</h3></span>
                            </div>
                            <div className="used-info">
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faTachometerAlt} className="used-icon" />
                                    <span>5.000 km</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faUsers} className="used-icon" />
                                    <span>5 Seat</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCogs} className="used-icon" />
                                    <span>Automatic</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faGasPump} className="used-icon" />
                                    <span>Oil</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="used-icon" />
                                    <span>Ha Noi</span>
                                </div>
                                <div className="used-info-item">
                                    <FontAwesomeIcon icon={faCar} className="used-icon" />
                                    <span>Pickup</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='morecar'>
                    <span><h3>See more car</h3></span>
                </div>
            </div>
            <div>
                <div className='cant-info'>
                    <div className='cant-info1'>
                        <div>
                            <span style={{ float: "left" }}>
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
                                    <FontAwesomeIcon icon={faPhone} style={{ color: "#FFF", margin: "0 20px" }} />
                                    <span>0825 355 355</span>
                                </div>
                                <div className='cant-info3'>
                                    <FontAwesomeIcon icon={faTwitter} style={{ color: "#FFF", margin: "0 20px" }} />
                                    <span>@CarBreezy</span>
                                </div>
                                <div className='cant-info3'>
                                    <FontAwesomeIcon icon={faFacebook} style={{ color: "#FFF", margin: "0 20px" }} />
                                    <span>@CarBreezy</span>
                                </div>
                            </div>
                            <div className='or'>
                                <hr style={{ width: "20%", color: "gray", margin: "20px 5px" }} />
                                <span>Or</span>
                                <hr style={{ width: "80%", color: "gray", margin: "20px 5px" }} />
                            </div>
                            <div className='yr-info'>
                                <span>Leave your information</span>
                                <input type="text" placeholder='Enter your phone number' />
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
                        <h2 style={{ textAlign: "center" }}>Buy and sell used cars, used cars at good prices</h2>
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
                            The highlight when buying a used car at CarBreezy is that customers will be able to pay in installments with the longest term on the market. CarBreezy also cooperates with many banks to support customers with loan value up to 70% of the car value and preferential interest rates. <br />
                            CarBreezy  affirms that user value is the top priority, which also helps CarBreezy become the most prestigious used car buying and selling platform in Vietnam. You can contact CarBreezy to receive more advice from the staff. <br />
                            Collapse
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Usedcar;