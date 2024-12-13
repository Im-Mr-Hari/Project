import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faShareFromSquare, faTachometerAlt, faGasPump, faCar, faSquare, faCogs, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

function CarDetails() {
    const [mainImage, setMainImage] = useState("./img/porsche6.jpg");
    const [thumbnailImage, setThumbnailImage] = useState([
        "./img/porsche7.jpg",
        "./img/porsche8.jpg",
        "./img/porsche9.jpg",
        "./img/porsche1.jpg",
    ]);

    const handleThumbnailClick = (image) => {
        const updatedThumbnails = [...thumbnailImage, mainImage];
        const filteredThumbnails = updatedThumbnails.filter((img) => img !== image);
        setMainImage(image);
        setThumbnailImage(filteredThumbnails);
    };

    return (
        <div>
            <div>
                thanh dieu huong truy cap
            </div>
            <div className='viewcar'>
                <div className='pic'>
                    <div><img src={mainImage} alt="Main Car" /></div>
                    <div className='pic-item'>
                        {thumbnailImage.map((image, index) => (
                            <div key={index} onClick={() => handleThumbnailClick(image)}>
                                <img src={image} alt={`Thumbnail ${index + 1}`} />
                            </div>
                        ))}
                    </div>                    
                </div>
                <div className='info'>
                    <h1>Tên Xe</h1>
                    <span>853.000$</span>
                    <div className='detail-buttons'>
                        <button className='detail-btn detail-btn-phone'>
                            <FontAwesomeIcon icon={faPhone} 
                            className="icon" />
                            Call Us
                        </button>
                        <button className='detail-btn detail-btn-mail'>
                            <FontAwesomeIcon icon={faEnvelope} 
                            className="icon" />
                            Email
                        </button>
                        <button className='detail-btn detail-btn-share'>
                            <FontAwesomeIcon icon={faShareFromSquare} 
                            className="icon" />
                            Share
                        </button>
                    </div>
                    <div>
                        <div className='child-info'>
                            <div className='info-icon'>
                                <span className='info-item'>
                                    <FontAwesomeIcon icon={faTachometerAlt} className="icon" />
                                    20.000km
                                </span>
                                <span className='info-item'>
                                    <FontAwesomeIcon icon={faGasPump} className="icon" />
                                    Gas
                                </span>
                            </div>
                            <div className='info-icon'>
                                <span className='info-item'>
                                    <FontAwesomeIcon icon={faCar} className="icon" />
                                    5 seats
                                </span>
                                <span className='info-item'>
                                    <FontAwesomeIcon icon={faSquare} className="icon" />
                                    5 seats
                                </span>
                            </div>
                            <div className='info-icon'>
                                <span className='info-item'>
                                    <FontAwesomeIcon icon={faCogs} className="icon" />
                                    CVT
                                </span>
                                <span className='info-item'>
                                    <FontAwesomeIcon icon={faMapMarkerAlt} className="icon" />
                                    CVT
                                </span>
                            </div>
                        </div>
                        <div>
                            <div className='contact-us'>
                                <div className='chil-contacts'>
                                    <FontAwesomeIcon icon={faInstagram}  
                                    className="icon" />
                                    Instagram
                                </div>
                                <div className='chil-contacts'>
                                    Hot Line: 0825 355 355
                                </div>
                            </div>                            
                        </div>
                        <div className='sign-up'>
                            Sign up for a test drive
                        </div>
                    </div>
                </div>
            </div>
            <div className='overview'>
                <div >
                    <div className="center-line"></div>
                    Vehicle Overview
                </div>
                <div>
                    <img src="./img/info.jpg" alt="info" />
                </div>
            </div>
            <div className='small-banner'>
                <div className='small-banner2'>
                    <div>
                        <h1>CarBreezy - Carpla - Used Car Trading Platform</h1>
                    </div>
                    <div className='buy-sale'>
                        <span className='buy-sale2'>Buy Car Now</span>
                        <span className='buy-sale2'>Sell Car Now</span>
                    </div>     
                </div>                
            </div>
        </div>
    );
}

export default CarDetails;
