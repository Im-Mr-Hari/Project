
function SUV() {
    const suv = [
        {
            id: "01",
            brand:"Ford",
            name: "Ford Everest Sport 2.0L AT 4x2 2021",
            model: "SUV",
            price: 39000,
            seats: 7,
            fuel: "Diesel",
            transmission:"10-speed automatic",
            height:"1837 mm",
            width: "1860 mm",
            length:"4892 mm",
            color:"Black",
            imgSrc:["./img/ford01.jpg", 
                    "./img/ford02.jpg",
                    "./img/ford03.jpg", 
                    "./img/ford04.jpg", 
                    "./img/ford05.jpg"],
            year: 2021        
        },
        {
            id: "02",
            brand:"Ford",
            name: "Ford Everest Titanium 2.0L AT 4x2 2021",
            model: "SUV",
            price: 39500,
            seats: 7,
            fuel: "Diesel",
            transmission:"10-speed automatic",
            height:"1837 mm",
            width: "1860 mm",
            length: "4892 mm",
            color:"Blue",
            imgSrc:["./img/ford06.jpg", 
                    "./img/ford07.jpg",
                    "./img/ford08.jpg", 
                    "./img/ford09.jpg", 
                    "./img/ford10.jpg"],
            year: 2021
        },
        {
            id: "03",
            brand:"Ford",
            name: "Ford Everest Sport 2.0L AT 4x2 2021",
            model: "SUV",
            price: 39000,
            seats: 7,
            fuel: "Diesel",
            transmission:"10-speed automatic",
            height:"1837 mm",
            width: "1860 mm",
            length: "4892 mm",
            color:"Blue",
            imgSrc:["./img/ford11.jpg", 
                    "./img/ford12.jpg",
                    "./img/ford13.jpg", 
                    "./img/ford14.jpg", 
                    "./img/ford15.jpg"],
            year: 2021
        },
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
            id: "11",
            brand:"KIA",
            name: "Kia Carens 1.4T SIGNATURE 2023",
            model: "SUV",
            price: 30000,
            seats: 7,
            fuel: "Gasoline",
            transmission:"7DCT",
            height:"1750 mm",
            width: "1800 mm",
            length: "4540 mm",
            color: "White",
            imgSrc:["./img/kia01.jpg", 
                    "./img/kia02.jpg",
                    "./img/kia03.jpg", 
                    "./img/kia04.jpg", 
                    "./img/kia05.jpg"],
            year: 2023
        },
        {
            id: "12",
            brand:"KIA",
            name: "Kia Carens 1.5G LUXURY 2023",
            model: "SUV",
            price: 30000,
            seats: 7,
            fuel: "Gasoline",
            transmission:"Automatic",
            height:"1750 mm",
            width: "1800 mm",
            length: "4540 mm",
            color: "White",
            imgSrc:["./img/kia06.jpg", 
                    "./img/kia07.jpg",
                    "./img/kia08.jpg", 
                    "./img/kia09.jpg", 
                    "./img/kia10.jpg"],
            year: 2023            
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
        },
        {
            id: "32",
            brand:"KIA",
            name: "Kia Sonet 1.5 Premium 2022",
            model: "SUV",
            price: 15000,
            seats: 5,
            fuel: "Gasoline",
            transmission:"CVT",
            height:"1642 mm",
            width: "1790 mm",
            length: "4120 mm",
            color: "Red",
            imgSrc:["./img/kia26.jpg", 
                    "./img/kia27jpg",
                    "./img/kia28.jpg", 
                    "./img/kia29.jpg", 
                    "./img/kia30.jpg"],
            year: 2022
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
                            <strong>Price:</strong>{car.price}
                        </p>
                        <p>
                            <strong>Fuel:</strong>{car.fuel}
                        </p>
                        <p>
                            <strong>Seats:</strong>{car.seats}
                        </p>
                        <p>
                            <strong>Year:</strong>{car.year}
                        </p>
                        <p>
                            <strong>Transmisson:</strong>{car.transmission}
                        </p>
                    </div>
                </div>
            ))}
            
        </div>
     );
}

export default SUV;