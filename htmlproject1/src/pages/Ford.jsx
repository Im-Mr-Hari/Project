import React from "react";

const Ford = () => {
  const cars = [
    {
      id: "01",
      name: "Ford Everest Sport 2.0L AT 4x2 2021",
      price: "$39,000",
      fuel: "Diesel",
      seats: 7,
      year: 2021,
      transmission: "10-speed automatic",
      imgSrc: "./img/ford01.jpg",
    },
    {
      id: "02",
      name: "Ford Everest Titanium 2.0L AT 4x2 2021",
      price: "$39,500",
      fuel: "Diesel",
      seats: 7,
      year: 2021,
      transmission: "10-speed automatic",
      imgSrc: "./img/ford06.jpg",
    },
    {
      id: "03",
      name: "Ford Everest Sport 2.0L AT 4x2 2021",
      price: "$39,000",
      fuel: "Diesel",
      seats: 7,
      year: 2021,
      transmission: "10-speed automatic",
      imgSrc: "./img/ford11.jpg",
    },
    {
      id: "04",
      name: "Ford Ranger XLS 2.2L 4x2 AT 2020",
      price: "$23,520",
      fuel: "Diesel",
      seats: 7,
      year: 2020,
      transmission: "10-speed automatic",
      imgSrc: "./img/ford16.jpg",
    },
    {
      id: "05",
      name: "Ford Territory Titanium 1.5 AT 2023",
      price: "$34,800",
      fuel: "Gasoline",
      seats: 5,
      year: 2023,
      transmission: "7-speed automatic",
      imgSrc: "./img/ford21.jpg",
    },
    {
      id: "31",
      brand:"FORD",
      name: "Ford Ranger XLS 2.2L 4x2 AT 2019",
      model: "PICKUP",
      price: 25.000,
      seats: 5,
      fuel: "Diesel",
      transmission:"6 speed Automatic",
      height:"1830 mm",
      width: "1860 mm",
      length: "5362 mm",
      color: "White",
      imgSrc:"./img/ford26.jpg", 
      year: 2019
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

export default Ford;
