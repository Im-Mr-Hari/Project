import React from "react";

const Map = () => {
    return (
        <div style={{ width: "33%", height: "200px", overflow: "hidden" }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.325316166695!2d106.66629700000001!3d10.786377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ed23c80767d%3A0x5a981a5efee9fd7d!2zNTkwIMSQLiBDw6FjaCBN4bqhbmcgVGjDoW5nIDgsIFBoxrDhu51uZyAxMSwgUXXhuq1uIDMsIEjhu5MgQ2jDrCBNaW5oIDcwMDAw!5e0!3m2!1svi!2s!4v1734186769603!5m2!1svi!2s"
                width="100%"
                height="200px"
                style={{ border: 0, marginLeft: "20px", borderRadius: "5px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map Embed"
            ></iframe>
        </div>
    );
};

export default Map;
