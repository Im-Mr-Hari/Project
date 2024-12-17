import React from "react";

const Kia = () => {
  const cars = [
    {
        id: "11",
        brand:"KIA",
        name: "Kia Carens 1.4T SIGNATURE 2023",
        model: "SUV",
        price: 30000,
        seats: 7,
        fuel: "Gasoline",
        transmission:"7DCT",
        height:"1750 mm",
        width: "1800 mm",
        ength: "4540 mm",
        color: "White",
        imgSrc:"./img/kia01.jpg", 
        year: 2023
    },
    {
        id: "12",
        brand:"KIA",
        name: "Kia Carens 1.5G LUXURY 2023",
        model: "SUV",
        price: 30000,
        seats: 7,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1750 mm",
        width: "1800 mm",
        length: "4540 mm",
        color: "White",
        imgSrc:"./img/kia06.jpg",                
        year: 2023
        
    },
    {
        id: "13",
        brand:"KIA",
        name:"Kia K3 1.6 Premium 2022",
        model: "SEDAN",
        price: 23000,
        seats: 5,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1450 mm",
        width: "1800 mm",
        length: "4640 mm",
        color: "Blue",
        imgSrc:"./img/kia11.jpg",                 
        year: 2022
    },
    {
        id: "14",
        brand:"KIA",
        name: "Kia K3 2.0 Premium 2024",
        model: "SEDAN",
        price: 26000,
        seats: 5,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1450 mm",
        width: "1800 mm",
        length: "4640 mm",
        color: "White",
        imgSrc:"./img/kia15.jpg",                 
        year: 2024
    },
    {
        id: "15",
        brand:"KIA",
        name: "Kia Rondo GAT 2022",
        model: "MPV",
        price: 21666,
        seats: 7,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1610 mm",
        width: "1805 mm",
        length: "4525 mm",
        color: "black",
        imgSrc:"./img/kia21.jpg", 
        year: 2022
    }
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

export default Kia;
