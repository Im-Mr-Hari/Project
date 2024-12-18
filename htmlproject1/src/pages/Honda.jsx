import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faCogs, faCalendarAlt, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer";

const Honda = () => {
  const cars = [
    {
      id: "06",
      brand: "HONDA",
      name: "Honda Brio RS 1.2L i-VTEC FWD 2021",
      model: "Hatchback",
      price: "16,100",
      seats: 5,
      fuel: "Gasoline",
      transmission: "CVT",
      height: "1487 mm",
      width: "1682 mm",
      length: "3817 mm",
      color: "White",
      imgSrc: "./img/honda01.jpg",
      year: 2021
    },
    {
      id: "07",
      brand: "HONDA",
      name: "Honda City L 1.5L i-VTEC FWD 2023",
      model: "SEDAN",
      price: "20,500",
      seats: 5,
      fuel: "Gasoline",
      transmission: "CVT",
      height: "1467 mm",
      width: "1748 mm",
      length: "4580 mm",
      color: "Green",
      imgSrc: "./img/honda06.jpg",
      year: 2023
    },
    {
      id: "08",
      brand: "HONDA",
      name: "Honda Civic E 1.8L i-VTEC FWD 2021",
      model: "SEDAN",
      price: "26,500",
      seats: 5,
      fuel: "Gasoline",
      transmission: "CVT",
      height: "1415 mm",
      width: "1802 mm",
      length: "4678 mm",
      color: "White",
      imgSrc: "./img/honda11.jpg",
      year: 2021
    },
    {
      id: "09",
      brand: "HONDA",
      name: "Honda CR-V 1.5L Turbo AWD 2022",
      model: "CUV",
      price: "31,250",
      seats: 7,
      fuel: "Gasoline",
      transmission: "CVT",
      height: "1679 mm",
      width: "1855 mm",
      length: "4584 mm",
      color: "Green",
      imgSrc: "./img/honda16.jpg",
      year: 2022
    },
    {
      id: "10",
      brand: "HONDA",
      name: "Honda CR-V 1.5L Turbo FWD 2019",
      model: "CUV",
      price: "31,250",
      seats: 7,
      fuel: "Gasoline",
      transmission: "CVT",
      height: "1679 mm",
      width: "1855 mm",
      length: "4584 mm",
      color: "Green",
      imgSrc: "./img/honda21.jpg",
      year: 2019
    },
    {
      id: "33",
      brand: "HONDA",
      name: "Honda City RS 2021",
      model: "SEDAN",
      price: 20000,
      seats: 5,
      fuel: "Gasoline",
      transmission: "CVT",
      height: "1467 mm",
      width: "1748 mm",
      length: "4553 mm",
      color: "Red",
      imgSrc: "./img/honda26.jpg",
      year: 2021
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
        <span className='content_nav-page'>Honda</span>
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

export default Honda;
