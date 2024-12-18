import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faCogs, faCalendarAlt, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer";

const Kia = () => {
  const cars = [
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
      ength: "4540 mm",
      color: "White",
      imgSrc: "./img/kia01.jpg",
      year: 2023
    },
    {
      id: "12",
      brand: "KIA",
      name: "Kia Carens 1.5L Luxury 6AT FWD 2023",
      model: "SUV",
      price: 30000,
      seats: 7,
      fuel: "Gasoline",
      transmission: "Automatic",
      height: "1750 mm",
      width: "1800 mm",
      length: "4540 mm",
      color: "White",
      imgSrc: "./img/kia06.jpg",
      year: 2023

    },
    {
      id: "13",
      brand: "KIA",
      name: "Kia K3 1.6L Premium 6AT FWD 2022",
      model: "SEDAN",
      price: 23000,
      seats: 5,
      fuel: "Gasoline",
      transmission: "Automatic",
      height: "1450 mm",
      width: "1800 mm",
      length: "4640 mm",
      color: "Blue",
      imgSrc: "./img/kia11.jpg",
      year: 2022
    },
    {
      id: "14",
      brand: "KIA",
      name: "Kia K3 2.0L Premium 6AT FWD 2024",
      model: "SEDAN",
      price: 26000,
      seats: 5,
      fuel: "Gasoline",
      transmission: "Automatic",
      height: "1450 mm",
      width: "1800 mm",
      length: "4640 mm",
      color: "White",
      imgSrc: "./img/kia15.jpg",
      year: 2024
    },
    {
      id: "15",
      brand: "KIA",
      name: "Kia Rondo 2.0L GAT 6AT FWD 2022",
      model: "MPV",
      price: 21666,
      seats: 7,
      fuel: "Gasoline",
      transmission: "Automatic",
      height: "1610 mm",
      width: "1805 mm",
      length: "4525 mm",
      color: "black",
      imgSrc: "./img/kia21.jpg",
      year: 2022
    },
    {
      id: "32",
      brand: "KIA",
      name: "Kia Sonet 1.5 Premium 2022",
      model: "SUV",
      price: 15000,
      seats: 5,
      fuel: "Gasoline",
      transmission: "CVT",
      height: "1642 mm",
      width: "1790 mm",
      length: "4120 mm",
      color: "Red",
      imgSrc: "./img/kia26.jpg",
      year: 2022
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
        <span className='content_nav-page'>KIA</span>
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

export default Kia;
