
function SEDAN() {
    const cars =[
        {
            id: "07",
            brand:"HONDA",
            name: "Honda City L 2023",
            model: "SEDAN",
            price: 20500,
            seats: 5,
            fuel: "Gasoline",
            transmission:"CVT",
            height:"1467 mm",
            width: "1748 mm",
            length: "4580 mm",
            color: "Green",
            imgSrc : "./img/honda06.jpg", 
            year: 2023
        },
        {
            id: "08",
            brand:"HONDA",
            name: "Honda Civic E 2021",
            model: "SEDAN",
            price: 26500,
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
            id: "13",
            brand:"KIA",
            name: "Kia K3 1.6 Premium 2022",
            model: "SEDAN",
            price: 23000,
            seats: 5,
            fuel: "Gasoline",
            transmission:"Automatic",
            height:"1450 mm",
            width: "1800 mm",
            length: "4640 mm",
            color: "Blue",
            imgSrc:"./img/kia11.jpg", 
            year: 2022
        },
        {
            id: "14",
            brand:"KIA",
            name: "Kia K3 2.0 Premium 2024",
            model: "SEDAN",
            price: 26000,
            seats: 5,
            fuel: "Gasoline",
            transmission:"Automatic",
            height:"1450 mm",
            width: "1800 mm",
            length: "4640 mm",
            color: "White",
            imgSrc:"./img/kia15.jpg", 
            year: 2024
        },
        {
            id: "16",
            brand:"MAZDA",
            name: "Mazda 3 1.5 Luxury 2022",
            model: "SEDAN",
            price: 20000,
            seats: 5,
            fuel: "Gasoline",
            transmission:"Automatic",
            height:"1440 mm",
            width: "1795 mm",
            length: "4660 mm",
            color: "Red",
            imgSrc: "./img/mazda01.jpg", 
            year: 2022
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
            imgSrc:"./img/mazda16.jpg", 
            year: 2019
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
            imgSrc:"./img/tesla06.jpg", 
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
            imgSrc: "./img/tesla11.jpg", 
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
            imgSrc: "./img/tesla16.jpg", 
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
            imgSrc: "./img/tesla21.jpg", 
            year: 2021
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
            imgSrc: "./img/honda26.jpg", 
            year: 2021
        }
    ]
    return ( 
        <div className="car-list">
            {cars.map((car)=> (
                <div className="car-card" key={car.id}>
                    <img src={car.imgSrc} alt={car.name} className="car-image"/>
                    <div className="car-info">
                        <h2 className="car-name">{car.name}</h2>
                        <p>
                            <strong>Price: </strong>{car.price}
                        </p>
                        <p>
                            <strong>Seats: </strong>{car.seats}
                        </p>
                        <p>
                            <strong>Fuel: </strong>{car.fuel}
                        </p>
                        <p>
                            <strong>Seats: </strong>{car.seats}
                        </p>
                        <p>
                            <strong>Year: </strong>{car.year}
                        </p>
                        <p>
                            <strong>Transmisson: </strong>{car.transmission}
                        </p>
                    </div>
                </div>
            ))}
        </div>
     );
}

export default SEDAN;