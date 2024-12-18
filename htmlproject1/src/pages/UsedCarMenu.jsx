import { width } from "@mui/system";
import React from "react";

const UsedCarMenu = () => {
  const cars = 
  [
    {
        id: "01",
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
        id: "02",
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
        id: "04",
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
        id: "06",
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
        id: "07",
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
        id: "11",
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
        id: "15",
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
        id: "17",
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
        id: "20",
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
        id: "22",
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
        id: "32",
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
        id: "34",
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

  return (
    <div className="car-list">
      {cars.map((car) => (
        <div className="car-card" key={car.id}>
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
  );
};

export default UsedCarMenu;
