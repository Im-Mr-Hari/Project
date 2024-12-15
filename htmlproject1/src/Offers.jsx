function Offers() {
    return (
        <div style={{ paddingBottom: "10000px" }}>
            <div className="bgOffers">
                <div className="bgColorOffers">
                    <div style={{ marginTop: "180px" }}>
                        <p className="title-extra-Offers">Discover unbeatable car deals tailored to your needs and budget. </p>
                        <p className="title-Offers">Welcome to Offers of Car</p>
                        <button className="btn-greeting-Offers">See now</button>
                    </div>
                </div>
            </div>

            {/* Top Featured Cars with Exclusive Offers  */}
            <div style={{ textAlign: "center", marginTop: "80px" }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="180" height="20" viewBox="0 0 224 20" fill="none">
                    <path d="M10 10H214" stroke="#BD1919" stroke-width="20" stroke-linecap="round" />
                </svg>
                <p style={{ marginTop: "10px" }} className='title-favouriteCar'>Top Featured Cars with Exclusive Offers</p>
            </div>

            <div className="container_offers-car-basic">
                {/* offer-car-1 */}
                <div className="offers-car_item-1">
                    <img className="img-offers-car-1" src="../img/car-offers-1.jpg" alt="" />
                    <div className="infoCar-offers">
                        <p className="nameCar-offers">SUV CLearance Sale</p>
                        <p className="descCar-offers">Explore our incredible discounts on a wide range of SUVs. Perfect for families and adventurers alike, these deals won't last long!</p>
                        <button className="btnView-offers btn-greeting-Offers">View Details</button>
                    </div>
                </div>

                {/* offer-car-2 */}
                <div className="offers-car_item-2">
                    <div className="bgColor-offers-item">
                        <div className="infoCar-offers-2">
                            <p className="nameCar-offers-2">SUV CLearance Sale</p>
                            <p className="descCar-offers-2">Explore our incredible discounts on a wide range of SUVs. Perfect for families and adventurers alike, these deals won't last long!</p>
                            <button className="btnView-offers btn-greeting-Offers">View Details</button>
                        </div>
                    </div>
                </div>

                {/* offer-car-3 */}
                <div className="offers-car_item-1">
                    <div className="infoCar-offers">
                        <p className="nameCar-offers">SUV CLearance Sale</p>
                        <p className="descCar-offers">Explore our incredible discounts on a wide range of SUVs. Perfect for families and adventurers alike, these deals won't last long!</p>
                        <button className="btnView-offers btn-greeting-Offers">View Details</button>
                    </div>
                    <img className="img-offers-car-1" src="../img/car-offers-6.jpeg" alt="" />
                </div>
            </div>

            <div className="container_offers-car-advance">
                {/* offer-car-4 */}




            </div>


        </div>
    );
}

export default Offers;