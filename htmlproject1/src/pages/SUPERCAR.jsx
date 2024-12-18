

function Supercar() {
    const cars = [
        {
            id: "26",
            brand:"FERRARI",
            name: "Ferrari Roma Spider",
            model: "SUPERCAR",
            price: 230000,
            seats: 2,
            fuel: "Gasoline",
            transmission:"8-speed dual-clutch",
            height:"1300 mm",
            width: "1920 mm",
            length: "4700 mm",
            color: "Silver",
            imgSrc:["./img/ferrari01.jpg", 
                    "./img/ferrari02.jpg",
                    "./img/ferrari03.jpg", 
                    "./img/ferrari04.jpg", 
                    "./img/ferrari05.jpg"],
            year: 2022
        },
        {
            id: "27",
            brand:"FERRARI",
            name: "Ferrari SF90 Stradale",
            model: "SUPERCAR",
            price: 625000,
            seats: 2,
            fuel: "Gasoline",
            transmission:"8-speed Dual-Clutch",
            height:"1190 mm",
            width: "1980 mm",
            length: "4700 mm",
            color: "Silver",
            imgSrc:["./img/ferrari06.jpg", 
                    "./img/ferrari07.jpg",
                    "./img/ferrari08.jpg", 
                    "./img/ferrari09.jpg", 
                    "./img/ferrari10.jpg"],
            year: 2021
        },
        {
            id: "28",
            brand:"FERRARI",
            name: "Ferrari Monza SP1",
            model: "SUPERCAR",
            price: 1975000,
            seats: 1,
            fuel: "Gasoline",
            transmission:"7-speed Dual-Clutch",
            height:"1290 mm",
            width: "1940 mm",
            length: "4570 mm",
            color: "Red",
            imgSrc:["./img/ferrari11.jpg", 
                    "./img/ferrari12.jpg",
                    "./img/ferrari13.jpg", 
                    "./img/ferrari14.jpg", 
                    "./img/ferrari15.jpg"],
            year: 2020
        },
        {
            id: "29",
            brand:"FERRARI",
            name: "Ferrari Daytona SP3",
            model: "SUPERCAR",
            price: 2200000,
            seats: 2,
            fuel: "Gasoline",
            transmission:"7-speed Dual-Clutch",
            height:"1180 mm",
            width: "1980 mm",
            length: "4540 mm",
            color: "Blue",
            imgSrc:["./img/ferrari16.jpg", 
                    "./img/ferrari17.jpg",
                    "./img/ferrari18.jpg", 
                    "./img/ferrari19.jpg", 
                    "./img/ferrari20.jpg"],
            year: 2019
        },
        {
            id: "30",
            brand:"FERRARI",
            name: "FERRARI_296_GTB",
            model: "SUPERCAR",
            price: 315000,
            seats: 2,
            fuel: "Gasoline",
            transmission:"8-speed Dual-clutch=",
            height:"1215 mm",
            width: "1950 mm",
            length: "4650 mm",
            color: "Red",
            imgSrc:["./img/ferrari21.jpg", 
                    "./img/ferrari22.jpg",
                    "./img/ferrari23.jpg", 
                    "./img/ferrari24.jpg", 
                    "./img/ferrari25.jpg"],
            year: 2020
        },
        {
            id: "35",
            brand:"FERRARI",
            name: "Ferrari 488",
            model: "SUPERCAR",
            price: 249.150,
            seats: 2,
            fuel: "Gasoline",
            transmission:"7-speed Dual-clutch",
            height:"1211 mm",
            width: "1953 mm",
            length: "4566 mm",
            color: "Red",
            imgSrc:["./img/ferrari26.jpg", 
                    "./img/ferrari27.jpg",
                    "./img/ferrari28.jpg", 
                    "./img/ferrari29.jpg", 
                    "./img/ferrari30.jpg"],
            year: 2016
        }
    ]
    return ( 
        <div className="car-list">
            {cars.map((car)=>(
                <div className="car-card" key={car.id}>
                    <img src={car.imgSrc} alt={car.name} className="car-image" />
                    <div className="car-info">
                        <h2 className="car-name">{car.name}</h2>
                        <p>
                            <strong>Price: </strong> {car.price}
                        </p>
                        <p>
                            <strong>Fuel: </strong> {car.fuel}
                        </p>
                        <p>
                            <strong>Seats: </strong> {car.seats}
                        </p>
                        <p>
                            <strong>Year: </strong> {car.year}
                        </p>
                        <p>
                            <strong>Transmission: </strong> {car.transmission}
                        </p>
                    </div>
                </div>
            ))}
        </div>
     );
}

export default Supercar;