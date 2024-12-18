import { width } from "@mui/system";

function Cuv() {
    const cars = [
        {
            id: "05",
            brand:"Ford",
            name: "Ford Territory Titanium 1.5 AT 2023",
            model: "CUV",
            price: 34800,
            seats: 5,
            fuel: "Gasonline",
            transmission:"7-speed automatic",
            height:"1706 mm",
            width: "1935 mm",
            length: "4630 mm",
            color: "White",
            imgSrc:["./img/ford21.jpg", 
                    "./img/ford22.jpg",
                    "./img/ford23.jpg", 
                    "./img/ford24.jpg", 
                    "./img/ford25.jpg"],
            year: 2023
        },
        {
            id: "09",
            brand:"HONDA",
            name: "Honda CR-V 1.5 E 2022",
            model: "CUV",
            price: 31250,
            seats: 7,
            fuel: "Gasoline",
            transmission:"CVT",
            height:"1679 mm",
            width: "1855 mm",
            length: "4584 mm",
            color: "Green",
            imgSrc:["./img/honda16.jpg", 
                    "./img/honda17.jpg",
                    "./img/honda18.jpg", 
                    "./img/honda19.jpg", 
                    "./img/honda20.jpg"],
            year: 2022
        },
        {
            id: "10",
            brand:"HONDA",
            name: "Honda CR-V 1.5 G 2019",
            model: "CUV",
            price: 31250,
            seats: 7,
            fuel: "Gasoline",
            transmission:"CVT",
            height: "1679 mm",
            width: "1855 mm",
            length: "4584 mm",
            color: "Green",
            imgSrc:["./img/honda21.jpg", 
                    "./img/honda22.jpg",
                    "./img/honda23.jpg", 
                    "./img/honda24.jpg", 
                    "./img/honda25.jpg"],
            year: 2019
        },
        {
            id: "34",
            brand:"MAZDA",
            name: "Mazda CX-5 2.0 AT 2016",
            model: "CUV",
            price: 32150,
            seats: 5,
            fuel: "Gasoline",
            transmission:"6-speed Automatic",
            height:"1680 mm",
            width: "1840 mm",
            length: "4555 mm",
            color: "Black",
            imgSrc:["./img/mazda26.jpg", 
                    "./img/mazda27.jpg",
                    "./img/mazda28.jpg", 
                    "./img/mazda29.jpg", 
                    "./img/mazda30.jpg"],
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

export default Cuv;