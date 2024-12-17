import React from "react";

const Honda = () => {
  const cars = [
    {
        id: "06",
        brand:"HONDA",
        name: "Honda Brio RS 2021",
        model: "Hatchback",
        price: "16,100",
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
        price: "20,500",
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
        id: "08",
        brand:"HONDA",
        name: "Honda Civic E 2021",
        model: "SEDAN",
        price: "26,500",
        seats: 5,
        fuel: "Gasoline",
        transmission:"CVT",
        height:"1415 mm",
        width: "1802 mm",
        length: "4678 mm",
        color: "White",
        imgSrc:"./img/honda11.jpg",                 
        year: 2021
    },
    {
        id: "09",
        brand:"HONDA",
        name: "Honda CR-V 1.5 E 2022",
        model: "CUV",
        price: "31,250",
        seats: 7,
        fuel: "Gasoline",
        transmission:"CVT",
        height:"1679 mm",
        width: "1855 mm",
        length: "4584 mm",
        color: "Green",
        imgSrc:"./img/honda16.jpg",                 
        year: 2022
    },
    {
        id: "10",
        brand:"HONDA",
        name: "Honda CR-V 1.5 G 2019",
        model: "CUV",
        price: "31,250",
        seats: 7,
        fuel: "Gasoline",
        transmission:"CVT",
        height: "1679 mm",
        width: "1855 mm",
        length: "4584 mm",
        color: "Green",
        imgSrc:"./img/honda21.jpg",              
        year: 2019
    },
    {
        id: "33",
        brand:"HONDA",
        name: "Honda City RS 2021",
        model: "SEDAN",
        price: 20000,
        seats: 5,
        fuel: "Gasoline",
        transmission:"CVT",
        height:"1467 mm",
        width: "1748 mm",
        length: "4553 mm",
        color: "Red",
        imgSrc:"./img/honda26.jpg", 
        year: 2021
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

export default Honda;
