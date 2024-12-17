import React from "react";

const Tesla = () => {
  const cars = [
    {
        id: "21",
        brand:"TESLA",
        name: "Tesla Cybertruck",
        model: "PICKUP",
        price: 60000,
        seats: 5,
        fuel: "Electric",
        transmission:"Automatic",
        height:"1900 mm",
        width: "2030 mm",
        length: "5890 mm",
        color: "Iron",
        imgSrc:["./img/tesla01.jpg", 
                "./img/tesla02.jpg",
                "./img/tesla03.jpg", 
                "./img/tesla04.jpg", 
                "./img/tesla05.jpg"],
        year: 2022
    },
    {
        id: "22",
        brand:"TESLA",
        name: "Tesla Model 3",
        model: "SEDAN",
        price: 45000,
        seats: 5,
        fuel: "Electric",
        transmission:"Automatic",
        height:"1443 mm",
        width: "1933 mm",
        length: "4694 mm",
        color: "White",
        imgSrc:["./img/tesla06.jpg", 
                "./img/tesla07.jpg",
                "./img/tesla08.jpg", 
                "./img/tesla09.jpg", 
                "./img/tesla10.jpg"],
        year: 2021
    },
    
    {
        id: "23",
        brand:"TESLA",
        name: "Tesla Model 3 Long Range",
        model: "SEDAN",
        price: 55000,
        seats: 5,
        fuel: "Electric",
        transmission:"Automatic",
        height:"1443 mm",
        width: "1933 mm",
        length: "4694 mm",
        color: "Black",
        imgSrc:["./img/tesla11.jpg", 
                "./img/tesla12.jpg",
                "./img/tesla13.jpg", 
                "./img/tesla14.jpg", 
                "./img/tesla15.jpg"],
        year: 2020
    },
    {
        id: "24",
        brand:"TESLA",
        name: "Tesla Model S",
        model: "SEDAN",
        price: 90000,
        seats: 5,
        fuel: "Electric",
        transmission:"Automatic",
        height:"1440 mm",
        width: "1964 mm",
        length: "4970 mm",
        color: "Red",
        imgSrc:["./img/tesla16.jpg", 
                "./img/tesla17.jpg",
                "./img/tesla18.jpg", 
                "./img/tesla19.jpg", 
                "./img/tesla20.jpg"],
        year: 2022
    },
    {
        id: "25",
        brand:"TESLA",
        name: "Tesla Model X",
        model: "SEDAN",
        price: 95000,
        seats: 7,
        fuel: "Electric",
        transmission:"Automatic",
        height:"1680 mm",
        width: "1990 mm",
        length: "5070 mm",
        color: "White",
        imgSrc:["./img/tesla21.jpg", 
                "./img/tesla22.jpg",
                "./img/tesla23.jpg", 
                "./img/tesla24.jpg", 
                "./img/tesla25.jpg"], 
        year: 2021
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

export default Tesla;
