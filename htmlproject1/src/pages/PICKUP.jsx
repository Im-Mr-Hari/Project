function PICKUP() {
    const cars = [
        {
            id : "39",
            brand :"MAZDA",
            name : "MAZDA BT-50",
            model : "PICKUP",
            price : 42000,
            seats : 5,
            fuel : "Diesel",
            transmission :"6-speed Manual-Transmission",
            height :"1800 mm",
            width : "1870 mm",
            length : "5280 mm",
            color : "Silver",
            imgSrc : "./img/mazda31.jpg", 
            year : 2022
        },
        {
            id : "31",
            brand:"FORD",
            name : "Ford Ranger XLS 2.2L 4x2 AT 2019",
            model : "PICKUP",
            price : 25.000,
            seats : 5,
            fuel: "Diesel",
            transmission :"6 speed Automatic",
            height:"1830 mm",
            width : "1860 mm",
            length : "5362 mm",
            color : "White",
            imgSrc :"./img/ford26.jpg", 
            year : 2019
        },
        {
            id : "21",
            brand:"TESLA",
            name : "Tesla Cybertruck",
            model : "PICKUP",
            price : 60000,
            seats : 5,
            fuel: "Electric",
            transmission :"Automatic",
            height:"1900 mm",
            width : "2030 mm",
            length : "5890 mm",
            color : "Iron",
            imgSrc :"./img/tesla02.jpg", 
            year : 2022
        },
        {
            id : "04",
            brand:"Ford",
            name : "Ford Ranger XLS 2.2L 4x2 AT 2020",
            model : "PICKUP",
            price : 23520,
            seats : 7,
            fuel: "Diesel",
            transmission :"10-speed automatic",
            height:"1830 mm",
            width : "1860 mm",
            length : "5362 mm",
            color : "Black",
            imgSrc :"./img/ford16.jpg", 
            year : 2020
        }
    ]
    return ( 
        <div className="car-list">
            {cars.map((car)=>(
                <div className="car-card" key={car.id}>
                    <img src={car.imgSrc} alt={car.name} className="cả-image"/>
                    <div className="car-info">
                        <h2 className="car-name">{car.name}</h2>
                        <p>
                            <strong>Price: </strong>{car.price}
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
                            <strong>Transmission: </strong>{car.transmission}
                        </p>
                    </div>
                </div>
            ))}
        </div>
     );
}

export default PICKUP;