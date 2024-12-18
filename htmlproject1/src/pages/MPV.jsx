import { color, width } from "@mui/system";

function MPV() {
    const cars = [
        {
            id : "36",
            brand :"HONDA",
            name: "HONDA BR-V",
            model : "MPV",
            price : 32500,
            seats: 7,
            fuel : "Gasoline",
            transmission :"Stepless CVT",
            height :"1685 mm",
            width : "1780 mm",
            length : "4490 mm",
            color : "White",
            imgSrc :"./img/honda31.jpg", 
            year : 2022
        },
        {
            id : "37",
            brand :"FORD",
            name: "FORD TOURNEO",
            model : "MPV",
            price : 45000,
            seats: 7,
            fuel : "Gasoline",
            transmission:"Automatic",
            height:"1990 mm",
            width: "2095 mm",
            length : "4976 mm",
            color : "White",
            imgSrc :"./img/ford33.jpg", 
            year : 2022
        },
        {
            id : "38",
            brand :"KIA",
            name: "KIA SEDONA",
            model : "MPV",
            price : 39580,
            seats: 7,
            fuel : "Gasoline",
            transmission:"Automatic",
            height:"1775 mm",
            width: "1985 mm",
            length : "5115 mm",
            color: "White",
            imgSrc:"./img/kia36.jpg", 
            year : 2022
        },
        {
            id : "15",
            brand :"KIA",
            name: "Kia Rondo GAT 2022",
            model : "MPV",
            price : 21666,
            seats: 7,
            fuel : "Gasoline",
            transmission:"Automatic",
            height:"1610 mm",
            width: "1805 mm",
            length : "4525 mm",
            color: "",
            imgSrc:"./img/kia21.jpg", 
            year : 2022
        }
    ]
    return ( 
        <div className="car-list">
            {cars.map((car)=>(
                <div className="car-card" key={car.id}>
                    <img src={car.imgSrc} alt={car.name} className="car-image"/>
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

export default MPV;