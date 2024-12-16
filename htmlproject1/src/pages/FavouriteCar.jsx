import React from "react";

// Dữ liệu JSON
const carData = [
  {
    id: "01",
    brand: "Ford",
    name: "Ford Everest Sport 2.0L AT 4x2 2021",
    model: "SUV",
    price: 39000,
    seats: 7,
    fuel: "Diesel",
    transmission: "10-speed automatic",
    height: "1837 mm",
    width: "1860 mm",
    length: "4892 mm",
    color: "Black",
    imgSrc: ["./img/ford01.jpg", "./img/ford02.jpg", "./img/ford03.jpg"],
    year: 2021,
  },
  {
    id: "07",
    brand: "HONDA",
    name: "Honda City L 2023",
    model: "SEDAN",
    price: 20500,
    seats: 5,
    fuel: "Gasoline",
    transmission: "CVT",
    height: "1467 mm",
    width: "1748 mm",
    length: "4580 mm",
    color: "Green",
    imgSrc: ["./img/honda06.jpg", "./img/honda07.jpg", "./img/honda08.jpg"],
    year: 2023,
  },
  {
    id: "11",
    brand: "KIA",
    name: "Kia Carens 1.4T SIGNATURE 2023",
    model: "SUV",
    price: 30000,
    seats: 7,
    fuel: "Gasoline",
    transmission: "7DCT",
    height: "1750 mm",
    width: "1800 mm",
    length: "4540 mm",
    color: "White",
    imgSrc: ["./img/kia01.jpg", "./img/kia02.jpg", "./img/kia03.jpg"],
    year: 2023,
  },
  {
    id: "16",
    brand: "MAZDA",
    name: "Mazda 3 1.5 Luxury 2022",
    model: "SEDAN",
    price: 20000,
    seats: 5,
    fuel: "Gasoline",
    transmission: "Automatic",
    height: "1440 mm",
    width: "1795 mm",
    length: "4660 mm",
    color: "Red",
    imgSrc: ["./img/mazda01.jpg", "./img/mazda02.jpg", "./img/mazda03.jpg"],
    year: 2022,
  },
  {
    id: "21",
    brand: "TESLA",
    name: "Tesla Cybertruck",
    model: "PICKUP",
    price: 60000,
    seats: 5,
    fuel: "Electric",
    transmission: "Automatic",
    height: "1900 mm",
    width: "2030 mm",
    length: "5890 mm",
    color: "Iron",
    imgSrc: ["./img/tesla01.jpg", "./img/tesla02.jpg", "./img/tesla03.jpg"],
    year: 2022,
  },
  {
    id: "26",
    brand: "FERRARI",
    name: "Ferrari Roma Spider",
    model: "SUPERCAR",
    price: 230000,
    seats: 2,
    fuel: "Gasoline",
    transmission: "8-speed dual-clutch",
    height: "1300 mm",
    width: "1920 mm",
    length: "4700 mm",
    color: "Silver",
    imgSrc: ["./img/ferrari01.jpg", "./img/ferrari02.jpg", "./img/ferrari03.jpg"],
    year: 2022,
  },
];

const CarMenu = () => {
  return (
    <div className="car-menu">
      <h2>Top Favourite Car Models</h2>
      <div className="car-grid">
        {carData.map((car) => (
          <div className="car-item" key={car.id}>
            <img
              src={car.imgSrc[0]}
              alt={car.name}
              className="car-image"
            />
            <h3>{car.name}</h3>
            <p>
              <strong>Price:</strong> ${car.price}
            </p>
            <p>
              <strong>Brand:</strong> {car.brand}
            </p>
            <p>
              <strong>Model:</strong> {car.model}
            </p>
            <p>
              <strong>Year:</strong> {car.year}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarMenu;
