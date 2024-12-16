import React from "react";

const MazdaList = () => {
  const cars = [
    {
        id": "16",
        brand":"MAZDA",
        name": "Mazda 3 1.5 Luxury 2022",
        model": "SEDAN",
        price": 20000,
        seats": 5,
        fuel": "Gasoline",
        transmission":"Automatic",
        height":"1440 mm",
        width": "1795 mm",
        length": "4660 mm",
        color": "Red",
        imgSrc":["./img/mazda01.jpg", 
                "./img/mazda02.jpg",
                "./img/mazda03.jpg", 
                "./img/mazda04.jpg", 
                "./img/mazda05.jpg"],
        year": 2022
    },
    {
        id": "17",
        brand":"MAZDA",
        name": "Mazda 3 1.5 Premium Sport 2020",
        model": "HATCHBACK",
        price": 24000,
        seats": 5,
        fuel": "Gasoline",
        transmission":"Automatic",
        height":"1445 mm",
        width": "1795 mm",
        length": "4465 mm",
        color": "White",
        imgSrc":["./img/mazda06.jpg", 
                "./img/mazda07.jpg",
                "./img/mazda08.jpg", 
                "./img/mazda09.jpg", 
                "./img/mazda10.jpg"],
        year": 2020 
    },
    {
        id": "18",
        brand":"MAZDA",
        name": "Mazda 3 15G AT HB FL 2019",
        model": "HATCHBACK",
        price": 20400,
        seats": 5,
        fuel": "Gasoline",
        transmission":"Automatic",
        height":"1540 mm",
        width": "1795 mm",
        length": "4580 mm",
        color": "White",
        imgSrc":["./img/mazda11.jpg", 
                "./img/mazda12.jpg",
                "./img/mazda13.jpg", 
                "./img/mazda14.jpg", 
                "./img/mazda15.jpg"],
        year": 2019
    },
    {
        id: "19",
        brand:"MAZDA",
        name: "Mazda 6 2.0 Premium 2019",
        model: "SEDAN",
        price: 24000,
        seats: 5,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1450 mm",
        width: "1840 mm",
        length: "4865 mm",
        color: "White",
        imgSrc:["./img/mazda16.jpg", 
                "./img/mazda17.jpg",
                "./img/mazda18.jpg", 
                "./img/mazda19.jpg", 
                "./img/mazda20.jpg"],
        year: 2019
    },
    {
        id: "20",
        brand:"MAZDA",
        name: "Mazda CX-5 2.0L Premium 2022",
        model: "SUV",
        price: 32000,
        seats: 5,
        fuel: "Gasoline",
        transmission:"Automatic",
        height:"1680 mm",
        width: "1840 mm",
        length: "4550 mm",
        color: "Red",
        imgSrc:["./img/mazda21.jpg", 
                "./img/mazda22.jpg",
                "./img/mazda23.jpg", 
                "./img/mazda24.jpg", 
                "./img/mazda25.jpg"],
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

export default MazdaList;
