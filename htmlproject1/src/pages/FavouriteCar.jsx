import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faTachometerAlt, faCogs, faFilter, faCalendar, faCalendarAlt, faUsers } from '@fortawesome/free-solid-svg-icons';

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
    transmission: "10AT",
    height: "1837 mm",
    width: "1860 mm",
    length: "4892 mm",
    color: "Black",
    imgSrc: ["../img/ford01.jpg"],
    year: 2021,
  },
  {
    id: "07",
    brand: "HONDA",
    name: "Honda City L 1.5L CVT 4x2 2023",
    model: "SEDAN",
    price: 20500,
    seats: 5,
    fuel: "Gasoline",
    transmission: "CVT",
    height: "1467 mm",
    width: "1748 mm",
    length: "4580 mm",
    color: "Green",
    imgSrc: ["./img/honda06.jpg"],
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
    imgSrc: ["./img/kia02.jpg"],
    year: 2023,
  },
  {
    id: "16",
    brand: "MAZDA",
    name: "Mazda 3 1.5L Luxury AT 4x2 2022",
    model: "SEDAN",
    price: 20000,
    seats: 5,
    fuel: "Gasoline",
    transmission: "Automatic",
    height: "1440 mm",
    width: "1795 mm",
    length: "4660 mm",
    color: "Red",
    imgSrc: ["./img/mazda02.jpg"],
    year: 2022,
  },
  {
    id: "21",
    brand: "TESLA",
    name: "Tesla Cybertruck Dual Motor AWD Electric 2024",
    model: "PICKUP",
    price: 60000,
    seats: 5,
    fuel: "Electric",
    transmission: "Automatic",
    height: "1900 mm",
    width: "2030 mm",
    length: "5890 mm",
    color: "Iron",
    imgSrc: ["./img/tesla02.jpg"],
    year: 2022,
  },
  {
    id: "26",
    brand: "FERRARI",
    name: "Ferrari Roma Spider 3.9L V8 Twin-Turbo RWD 2024",
    model: "SUPERCAR",
    price: 230000,
    seats: 2,
    fuel: "Gasoline",
    transmission: "8DCT",
    height: "1300 mm",
    width: "1920 mm",
    length: "4700 mm",
    color: "Silver",
    imgSrc: ["./img/ferrari01.jpg"],
    year: 2022,
  },
];

const CarMenu = () => {
  return (
    <div className="car-menu">
      <div className="car-grid">
        {carData.map((car) => (
          <div className="car-item_menu" key={car.id}>
            <img
              src={car.imgSrc[0]}
              alt={car.name}
              className="car-image_menu"
            />
            <div className="container_carMenu-infor">
              <p className="nameCar_menu">{car.name}</p>
              <p className="priceCar_menu">
                {car.price}$
              </p>
              <div className="carMenu-infor-detail">
                <div className="carMenu-infor-item">
                  <p>
                    <strong><FontAwesomeIcon icon={faCalendarAlt} className="icon-menu" /></strong> <span style={{ paddingLeft: "3px" }}>{car.year}</span>
                  </p>
                </div>
                <div className="carMenu-infor-item">
                  <p>
                    <strong><FontAwesomeIcon icon={faUsers} className="icon-menu" /></strong>  <span style={{ paddingLeft: "3px" }}>{car.seats}</span>
                  </p>
                </div>
                <div className="carMenu-infor-item">
                  <p style={{ paddingLeft: "6px", paddingRight: "6px" }}>
                    <strong><FontAwesomeIcon icon={faGasPump} className="icon-menu" /></strong> {car.fuel}
                  </p>
                </div>
                <div className="carMenu-infor-item">
                  <p>
                    <strong><FontAwesomeIcon icon={faCogs} className="icon-menu" /></strong> <span className="temp_icon">{car.transmission}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div >
  );
};

export default CarMenu;
