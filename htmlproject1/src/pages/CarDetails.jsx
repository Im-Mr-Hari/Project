import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope, faShareFromSquare, faTachometerAlt, faGasPump, faCar, faSquare, faCogs, faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import CarDetailstest from './TEST';
import { useParams } from 'react-router-dom';

function CarDetails() {
    const carData = 
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
        }
    ];

    const {id} = useParams();
    const car = carData.find((item)=> item.id === id);
        if (!car){
            return <h2>Car Not Found</h2>
        }
    return (
        <div>
            <div className='visit-history'>
                Thanh điều hướng truy cập
            </div>
            <div className="car-details-container">
                <div className="car-main-info">
                    <img src={car.imgSrc} alt={car.name} className="main-image" />
                    <div className="car-info">
                    <h1>{car.name}</h1>
                    <h2 className="car-price">
                        {car.price.toLocaleString()} <span>USD</span>
                    </h2>
                    <div className="action-buttons">
                        <button className="call-btn">Call Us</button>
                        <button className="email-btn">E-mail</button>
                        <button className="share-btn">Share</button>
                    </div>
                    <div className="car-specs">
                        <p>🚗 <strong>{car.mileage}</strong></p>
                        <p>🪑 <strong>{car.seats} seats</strong></p>
                        <p>⚙️ <strong>{car.fuel}</strong></p>
                    </div>
                    </div>
                </div>

      {/* <div className="car-gallery">
        {car.gallery.map((image, index) => (
          <img key={index} src={image} alt={`Gallery ${index}`} />
        ))}
      </div> */}

      <div className="additional-info">
        <button className="test-drive-btn">Sign up for a test drive</button>
        <p className="hotline">
          <strong>Hotline:</strong> {car.hotline}
        </p>
      </div>
    </div>

            <div className='over-view2'>
                <div className="center-line"></div>
                    <h1>Vehicle Overview</h1>
            </div>
            <div className='overview'>
                <div className='details-info'>
                    <CarDetailstest />
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
