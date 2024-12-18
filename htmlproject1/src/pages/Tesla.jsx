import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGasPump, faCogs, faCalendarAlt, faUsers, faSearch } from '@fortawesome/free-solid-svg-icons';
import Footer from "../Footer";

const Tesla = () => {
  const cars = [
    {
      id: "21",
      brand: "TESLA",
      name: "Tesla Cybertruck Tri-Motor AWD Electric 2022",
      model: "PICKUP",
      price: 60000,
      seats: 5,
      fuel: "Electric",
      transmission: "Automatic",
      height: "1900 mm",
      width: "2030 mm",
      length: "5890 mm",
      color: "Iron",
      imgSrc: [
        "./img/tesla05.jpg",
        "./img/tesla04.jpg",
        "./img/tesla03.jpg",
        "./img/tesla02.jpg",
        "./img/tesla01.jpg",
      ],
      year: 2022
    },
    {
      id: "22",
      brand: "TESLA",
      name: "Tesla Model 3 Dual Motor AWD 2022",
      model: "SEDAN",
      price: 45000,
      seats: 5,
      fuel: "Electric",
      transmission: "Automatic",
      height: "1443 mm",
      width: "1933 mm",
      length: "4694 mm",
      color: "White",
      imgSrc: [
        "./img/tesla06.jpg",
        "./img/tesla07.jpg",
        "./img/tesla08.jpg",
        "./img/tesla09.jpg",
        "./img/tesla10.jpg",
      ],
      year: 2021
    },

    {
      id: "23",
      brand: "TESLA",
      name: "Tesla Model 3 Long Range AWD 2022",
      model: "SEDAN",
      price: 55000,
      seats: 5,
      fuel: "Electric",
      transmission: "Automatic",
      height: "1443 mm",
      width: "1933 mm",
      length: "4694 mm",
      color: "Black",
      imgSrc: [
        "./img/tesla11.jpg",
        "./img/tesla12.jpg",
        "./img/tesla13.jpg",
        "./img/tesla14.jpg",
        "./img/tesla15.jpg"
      ],
      year: 2020
    },
    {
      id: "24",
      brand: "TESLA",
      name: "Tesla Model S Dual Motor AWD 2022",
      model: "SEDAN",
      price: 90000,
      seats: 5,
      fuel: "Electric",
      transmission: "Automatic",
      height: "1440 mm",
      width: "1964 mm",
      length: "4970 mm",
      color: "Red",
      imgSrc: [
        "./img/tesla16.jpg",
        "./img/tesla17.jpg",
        "./img/tesla18.jpg",
        "./img/tesla19.jpg",
        "./img/tesla20.jpg"
      ],
      year: 2022
    },
    {
      id: "25",
      brand: "TESLA",
      name: "Tesla Model X Dual Motor AWD 2022",
      model: "SEDAN",
      price: 95000,
      seats: 7,
      fuel: "Electric",
      transmission: "Automatic",
      height: "1680 mm",
      width: "1990 mm",
      length: "5070 mm",
      color: "White",
      imgSrc: [
        "./img/tesla22.jpg",
        "./img/tesla25.jpg",
        "./img/tesla24.jpg",
        "./img/tesla23.jpg",
        "./img/tesla21.jpg",

      ],
      year: 2021
    },
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
        <span className='content_nav-page'>Tesla</span>
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
      <div style={{ height: "370px" }}></div>
      <Footer />
    </div >
  );
};

export default Tesla;
