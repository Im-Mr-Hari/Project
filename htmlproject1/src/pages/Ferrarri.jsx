import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faCogs, faCalendarAlt, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer";


const Ferrari = () => {
  const cars = [
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
      imgSrc: "./img/ferrari01.jpg",
      year: 2022
    },
    {
      id: "27",
      brand: "FERRARI",
      name: "Ferrari SF90 Stradale 4.0L V8 Hybrid AWD 2024",
      model: "SUPERCAR",
      price: 625000,
      seats: 2,
      fuel: "Gasoline",
      transmission: "8DCT",
      height: "1190 mm",
      width: "1980 mm",
      length: "4700 mm",
      color: "Silver",
      imgSrc: "./img/ferrari06.jpg",
      year: 2021
    },
    {
      id: "28",
      rand: "FERRARI",
      name: "Ferrari Monza SP1 6.3L V12 RWD 2024",
      model: "SUPERCAR",
      price: 1975000,
      seats: 1,
      fuel: "Gasoline",
      transmission: "7DCT",
      height: "1290 mm",
      width: "1940 mm",
      length: "4570 mm",
      color: "Red",
      imgSrc: "./img/ferrari11.jpg",
      year: 2020
    },
    {
      id: "29",
      brand: "FERRARI",
      name: "Ferrari Daytona SP3 6.5L V12 RWD 2024",
      model: "SUPERCAR",
      price: 2200000,
      seats: 2,
      fuel: "Gasoline",
      transmission: "7DCT",
      height: "1180 mm",
      width: "1980 mm",
      length: "4540 mm",
      color: "Blue",
      imgSrc: "./img/ferrari16.jpg",
      year: 2019
    },
    {
      id: "30",
      brand: "FERRARI",
      name: "Ferrari 296 GTB 3.0L V6 Hybrid RWD 2024",
      model: "SUPERCAR",
      price: 315000,
      seats: 2,
      fuel: "Gasoline",
      transmission: "8DCT",
      height: "1215 mm",
      width: "1950 mm",
      length: "4650 mm",
      color: "Red",
      imgSrc: "./img/ferrari21.jpg",
      year: 2020
    },
    {
      id: "35",
      brand: "FERRARI",
      name: "Ferrari 488",
      model: "SUPERCAR",
      price: 249.150,
      seats: 2,
      fuel: "Gasoline",
      transmission: "7-speed Dual-clutch",
      height: "1211 mm",
      width: "1953 mm",
      length: "4566 mm",
      color: "Red",
      imgSrc: "./img/ferrari26.jpg",
      year: 2016
    }
  ];

  return (
    <div>
      <div style={{ height: "70px" }}></div>

      {/* nav page */}
      <div style={{ marginBottom: "5px" }} className='nav-page'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-9">
          <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
          <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
        </svg>
        <Link className='a' to="/">
          <span className='content_nav-page not'>Home</span>
        </Link>
        <svg className='chevron-right' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8">
          <path fill-rule="evenodd" d="M16.28 11.47a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 0 1-1.06-1.06L14.69 12 7.72 5.03a.75.75 0 0 1 1.06-1.06l7.5 7.5Z" clip-rule="evenodd" />
        </svg>
        <span className='content_nav-page'>Ferrari</span>
      </div>

      {/* results bar */}
      <div style={{ marginBottom: "20px" }} className="bar-results">
        <p className='num-results'>5 results</p>
      </div>

      {/* search bar */}
      <div className="container_searchToBrand">
        <FontAwesomeIcon icon={faSearch} className="icon-searchBar" />
        <input type="text" placeholder="Search..." />
        <button>Search</button>
      </div>


      {/* show car - Ferrari */}
      <div className="car-menu fixContainerBrand">
        <div className="car-grid fixToBrand">
          {cars.map((car) => (
            <div className="car-item_menu itemFixed" key={car.id}>
              <img
                src={car.imgSrc}
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
      <div style={{ height: "370px" }}></div>
      <Footer />
    </div >
  );
};

export default Ferrari;
