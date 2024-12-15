import React, { useState, useEffect } from 'react';
import { Link, Routes, Route } from 'react-router-dom'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import FAQComponent from './FAQ';

function Home() {
    return (
        // WELCOME TO CARBREEZY
        <div>
            <div className='overlay-title'>
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    style={{
                        width: '100%',
                        height: '100vh',
                        objectFit: 'cover',
                    }}
                >
                    <source className='videoBg' src="../img/video-bground.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <div className='title-greeting'>
                    <p className='p-1'>WELCOME TO <span className='color'>CARBREEZY</span></p>
                    <p className='p-2'><span className='color luxury-text'>Luxury</span> Experience On Every Journey</p>
                    <button className='btn-greeting'>
                        <img className='search-logo' src="../img/Search-logo.png" alt="Search Logo" />
                        <span className='content-search'>See more</span>
                    </button>
                </div>
            </div>

            <div className='container-white'>
                <p className='title-brands'>Our premium brands</p>

                {/* Our premium brands */}
                <div className="brands-search">
                    <div className="brands-logo">
                        <a href=""><img src="../img/Hondalogo.jpg" alt="Honda" /></a>
                    </div>
                    <div className="brands-logo">
                        <a href=""><img src="../img/KIAlogo.jpg" alt="KIA" /></a>
                    </div>
                    <div className="brands-logo">
                        <a href=""><img src="../img/Teslalogo.jpg" alt="Tesla" /></a>
                    </div>
                    <div className="brands-logo">
                        <a href=""><img src="../img/ferrarilogo.jpg" alt="Ferrari" style={{ width: "160px" }} /></a>
                    </div>
                    <div className="brands-logo">
                        <a href=""><img src="../img/fordlogo.jpg" alt="Ford" /></a>
                    </div>
                </div>

                {/* Top favourite car models */}
                <div style={{ textAlign: "center", marginTop: "100px", marginBottom: "30px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="180" height="20" viewBox="0 0 224 20" fill="none">
                        <path d="M10 10H214" stroke="#BD1919" stroke-width="20" stroke-linecap="round" />
                    </svg>
                    <p className='title-favouriteCar'>Top favourite car models</p>

                    <div className="container_favouriteCar">
                        <div className="car-item width-fix">
                            <div className='container_img-car'>
                                <img src="../img/car.jpg" alt="" className="img-car" />
                            </div>
                            <div className='info-car'>
                                <p className="name-car">(B-286) Audi Q5 35 TDI S tronic advanced </p>
                                <p className='price-car'>853000$</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                                    <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                                </svg>
                                <span className='price-withoutCar'>717000$ (Price without DPH)</span>
                                <div className='box_info-extra'>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px" }}>
                                            <svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "#6f7a90" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>2021</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{
                                            textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px"
                                        }}>
                                            < svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "hsl(220,13%,50%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>120 kW</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "5px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-gas-pump mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Oil</span>
                                        </div>

                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 10px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-tachometer-alt mr-1"></i>
                                            <p style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>50 000 km</p>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 14px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-cogs mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Automatic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="car-item width-fix">
                            <div className='container_img-car'>
                                <img src="../img/car.jpg" alt="" className="img-car" />
                            </div>
                            <div className='info-car'>
                                <p className="name-car">(B-286) Audi Q5 35 TDI S tronic advanced </p>
                                <p className='price-car'>853000$</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                                    <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                                </svg>
                                <span className='price-withoutCar'>717000$ (Price without DPH)</span>
                                <div className='box_info-extra'>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px" }}>
                                            <svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "#6f7a90" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>2021</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{
                                            textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px"
                                        }}>
                                            < svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "hsl(220,13%,50%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>120 kW</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "5px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-gas-pump mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Oil</span>
                                        </div>

                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 10px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-tachometer-alt mr-1"></i>
                                            <p style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>50 000 km</p>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 14px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-cogs mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Automatic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="car-item width-fix">
                            <div className='container_img-car'>
                                <img src="../img/car.jpg" alt="" className="img-car" />
                            </div>
                            <div className='info-car'>
                                <p className="name-car">(B-286) Audi Q5 35 TDI S tronic advanced </p>
                                <p className='price-car'>853000$</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                                    <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                                </svg>
                                <span className='price-withoutCar'>717000$ (Price without DPH)</span>
                                <div className='box_info-extra'>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px" }}>
                                            <svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "#6f7a90" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>2021</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{
                                            textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px"
                                        }}>
                                            < svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "hsl(220,13%,50%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>120 kW</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "5px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-gas-pump mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Oil</span>
                                        </div>

                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 10px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-tachometer-alt mr-1"></i>
                                            <p style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>50 000 km</p>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 14px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-cogs mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Automatic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="car-item width-fix">
                            <div className='container_img-car'>
                                <img src="../img/car.jpg" alt="" className="img-car" />
                            </div>
                            <div className='info-car'>
                                <p className="name-car">(B-286) Audi Q5 35 TDI S tronic advanced </p>
                                <p className='price-car'>853000$</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                                    <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                                </svg>
                                <span className='price-withoutCar'>717000$ (Price without DPH)</span>
                                <div className='box_info-extra'>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px" }}>
                                            <svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "#6f7a90" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>2021</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{
                                            textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px"
                                        }}>
                                            < svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "hsl(220,13%,50%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>120 kW</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "5px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-gas-pump mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Oil</span>
                                        </div>

                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 10px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-tachometer-alt mr-1"></i>
                                            <p style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>50 000 km</p>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 14px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-cogs mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Automatic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="car-item width-fix">
                            <div className='container_img-car'>
                                <img src="../img/car.jpg" alt="" className="img-car" />
                            </div>
                            <div className='info-car'>
                                <p className="name-car">(B-286) Audi Q5 35 TDI S tronic advanced </p>
                                <p className='price-car'>853000$</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                                    <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                                </svg>
                                <span className='price-withoutCar'>717000$ (Price without DPH)</span>
                                <div className='box_info-extra'>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px" }}>
                                            <svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "#6f7a90" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>2021</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{
                                            textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px"
                                        }}>
                                            < svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "hsl(220,13%,50%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>120 kW</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "5px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-gas-pump mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Oil</span>
                                        </div>

                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 10px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-tachometer-alt mr-1"></i>
                                            <p style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>50 000 km</p>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 14px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-cogs mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Automatic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="car-item width-fix">
                            <div className='container_img-car'>
                                <img src="../img/car.jpg" alt="" className="img-car" />
                            </div>
                            <div className='info-car'>
                                <p className="name-car">(B-286) Audi Q5 35 TDI S tronic advanced </p>
                                <p className='price-car'>853000$</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                                    <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                                </svg>
                                <span className='price-withoutCar'>717000$ (Price without DPH)</span>
                                <div className='box_info-extra'>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px" }}>
                                            <svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "#6f7a90" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>2021</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{
                                            textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px"
                                        }}>
                                            < svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "hsl(220,13%,50%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>120 kW</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "5px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-gas-pump mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Oil</span>
                                        </div>

                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 10px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-tachometer-alt mr-1"></i>
                                            <p style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>50 000 km</p>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 14px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-cogs mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Automatic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="car-item width-fix">
                            <div className='container_img-car'>
                                <img src="../img/car.jpg" alt="" className="img-car" />
                            </div>
                            <div className='info-car'>
                                <p className="name-car">(B-286) Audi Q5 35 TDI S tronic advanced </p>
                                <p className='price-car'>853000$</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                                    <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                                </svg>
                                <span className='price-withoutCar'>717000$ (Price without DPH)</span>
                                <div className='box_info-extra'>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px" }}>
                                            <svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "#6f7a90" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>2021</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{
                                            textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px"
                                        }}>
                                            < svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "hsl(220,13%,50%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>120 kW</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "5px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-gas-pump mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Oil</span>
                                        </div>

                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 10px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-tachometer-alt mr-1"></i>
                                            <p style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>50 000 km</p>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 14px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-cogs mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Automatic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="car-item width-fix">
                            <div className='container_img-car'>
                                <img src="../img/car.jpg" alt="" className="img-car" />
                            </div>
                            <div className='info-car'>
                                <p className="name-car">(B-286) Audi Q5 35 TDI S tronic advanced </p>
                                <p className='price-car'>853000$</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                                    <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                                </svg>
                                <span className='price-withoutCar'>717000$ (Price without DPH)</span>
                                <div className='box_info-extra'>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px" }}>
                                            <svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "#6f7a90" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>2021</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{
                                            textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px"
                                        }}>
                                            < svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "hsl(220,13%,50%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>120 kW</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "5px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-gas-pump mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Oil</span>
                                        </div>

                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 10px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-tachometer-alt mr-1"></i>
                                            <p style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>50 000 km</p>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 14px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-cogs mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Automatic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="car-item width-fix">
                            <div className='container_img-car'>
                                <img src="../img/car.jpg" alt="" className="img-car" />
                            </div>
                            <div className='info-car'>
                                <p className="name-car">(B-286) Audi Q5 35 TDI S tronic advanced </p>
                                <p className='price-car'>853000$</p>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10">
                                    <path fill-rule="evenodd" d="M5.25 2.25a3 3 0 0 0-3 3v4.318a3 3 0 0 0 .879 2.121l9.58 9.581c.92.92 2.39 1.186 3.548.428a18.849 18.849 0 0 0 5.441-5.44c.758-1.16.492-2.629-.428-3.548l-9.58-9.581a3 3 0 0 0-2.122-.879H5.25ZM6.375 7.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25Z" clip-rule="evenodd" />
                                </svg>
                                <span className='price-withoutCar'>717000$ (Price without DPH)</span>
                                <div className='box_info-extra'>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px" }}>
                                            <svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "#6f7a90" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path d="M12.75 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM7.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM8.25 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM9.75 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM10.5 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM12 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM12.75 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM14.25 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 17.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 15.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5ZM15 12.75a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0ZM16.5 13.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" />
                                                <path fillRule="evenodd" d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>2021</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{
                                            textAlign: "center", display: "flex", justifyContent: "center", gap: "0px", padding: "0 8px"
                                        }}>
                                            < svg style={{ width: "20px", height: "20px", marginTop: "5px", color: "hsl(220,13%,50%)" }} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-12">
                                                <path fillRule="evenodd" d="M14.615 1.595a.75.75 0 0 1 .359.852L12.982 9.75h7.268a.75.75 0 0 1 .548 1.262l-10.5 11.25a.75.75 0 0 1-1.272-.71l1.992-7.302H3.75a.75.75 0 0 1-.548-1.262l10.5-11.25a.75.75 0 0 1 .913-.143Z" clipRule="evenodd" />
                                            </svg>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>120 kW</span>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "5px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-gas-pump mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Oil</span>
                                        </div>

                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 10px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-tachometer-alt mr-1"></i>
                                            <p style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>50 000 km</p>
                                        </div>
                                    </div>
                                    <div className='boxColor-item'>
                                        <div style={{ textAlign: "center", display: "flex", justifyContent: "center", gap: "8px", padding: "0 14px" }}>
                                            <i style={{ width: "20px", height: "20px", marginTop: "8px", color: "hsl(220,13%,50%)" }} class="fas fa-cogs mr-1"></i>
                                            <span style={{ textAlign: "center", fontFamily: "Poppins", marginTop: "5px", color: "hsl(220,13%, 50%)", marginBottom: "0" }}>Automatic</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/newCar">
                        <button className='btn-MoreCar'>See more car</button>
                    </Link>
                </div>



                {/* Why choose CarBreezy? */}
                <div className='container_reason'>
                    <div style={{ textAlign: "center", marginTop: "100px" }}>
                        <svg style={{ marginTop: "80px", marginBottom: "10px" }} xmlns="http://www.w3.org/2000/svg" width="180" height="20" viewBox="0 0 224 20" fill="none">
                            <path d="M10 10H214" stroke="#BD1919" stroke-width="20" stroke-linecap="round" />
                        </svg>
                    </div>

                    <p className='title-reason'>Why choose <span className='color'>CarBreezy?</span></p>

                    <div className='container_reason-content'>
                        <div className="reason-item">
                            <img className='logo-reason' src="../img/images-removebg-preview_2-removebg-preview.png" alt="" />
                            <p className='title-reason-content'>Quality and Reliability</p>
                            <p className='reason-content'>CarBreezy's team is always ready to support you, from car selection to after-sales maintenance, ensuring a perfect experience for each customer.</p>
                        </div>
                        <div style={{ marginTop: "20px" }} className="reason-item">
                            <img style={{ width: "60px" }} className='logo-reason' src="../img/logo-reason-2.png" alt="" />
                            <p className='title-reason-content'>Competitive Prices</p>
                            <p className='reason-content'>We offer competitive prices on both new and used cars to suit your every need and budget.</p>
                        </div>
                        <div className="reason-item">
                            <img className='logo-reason' src="../img/logo-reason-3.png" alt="" />
                            <p className='title-reason-content'>Quality and Reliability</p>
                            <p className='reason-content'>CarBreezy range of cars that combine modern technology and high reliability. Each car in our product range is designed to meet the diverse needs of our customers.</p>
                        </div>
                    </div>
                </div>

                {/* Numbers speaking */}
                <div className='bgPicture'>
                    <div className="bgColor">
                        <div style={{ zIndex: "5" }}>
                            <br />
                            <p className='extraTitle-numbers'>OUR CUSTOMISATION</p>
                            <p className='title-numbers'>Car Servin Matched with Great Workmansip</p>
                            <p className='desc-numbers'>Our dedicated team of skilled technicians and mechanics takes pride in delivering top-tier servicing for your beloved vehicle.</p>
                        </div>

                        <div className="container-numbers">
                            <div className="numbers-item">
                                <p className='numbers'>65</p>
                                <p className='numbers-content'>Total Projects</p>
                            </div>
                            <div className="numbers-item">
                                <p className='numbers'>178</p>
                                <p className='numbers-content'>Transparency</p>
                            </div>
                            <div className="numbers-item">
                                <p className='numbers'>563</p>
                                <p className='numbers-content'>Done Projects</p>
                            </div>
                            <div className="numbers-item">
                                <p className='numbers'>4018</p>
                                <p className='numbers-content'>Got Awards</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Customers talk about CarBreezy */}
                <div style={{ textAlign: "center", marginTop: "50px" }}>
                    <svg style={{ marginTop: "80px", marginBottom: "10px" }} xmlns="http://www.w3.org/2000/svg" width="180" height="20" viewBox="0 0 224 20" fill="none">
                        <path d="M10 10H214" stroke="#BD1919" stroke-width="20" stroke-linecap="round" />
                    </svg>
                    <p className='title-reason'>Customers talk about <span className='color'>CarBreezy?</span></p>
                    <p className='desc-title'>More than 1,000 customers have trusted and are using CarBreezy's sevice with satisfaction in receiving the most professional care and servie</p>

                    <div className="container-feedback">
                        <div className="feedback-item">
                            <div className='header-feedback'>
                                <img className='star' src="../img/star.png" alt="" />
                                <div style={{ width: "70px" }}></div>
                                <p className='day'>12/05/2024</p>
                            </div>
                            <p className='info_title-feedback'>Mr. Nguyen Van Dinh bought an Mustang car.</p>
                            <p className='info_detail-feedback'>Completely satisfied with the quality of the cars as well as the staff at the branch. I have no complaints about CarBreezy</p>
                            <p className='info-title-footer-a'>Mr. Nguyen Van Dinh - TPHCM</p>
                            <p className='info-car'>Ford Mustang</p>
                        </div>
                        <div className="feedback-item">
                            <div className='header-feedback'>
                                <img className='star' src="../img/star.png" alt="" />
                                <div style={{ width: "70px" }}></div>
                                <p className='day'>06/04/2023</p>
                            </div>
                            <p className='info_title-feedback'>Mr. Thanh Loc bought an Cybertruck car.</p>
                            <p className='info_detail-feedback'>Used many cars, bought this car at CarBreezy online, looked at the pictures and received the car delivery notice but was very satisfied with the quality of the car. </p>
                            <p className='info-title-footer-b'>Mr. Thanh Loc  - Ha Noi</p>
                            <p className='info-car'>Tesla Cybertruck</p>
                        </div>
                        <div className="feedback-item">
                            <div className='header-feedback'>
                                <img className='star' src="../img/star.png" alt="" />
                                <div style={{ width: "70px" }}></div>
                                <p className='day'>20/12/2024</p>
                            </div>
                            <p className='info_title-feedback'>Mr. Michael Gillian bought an Purosangue 2024.</p>
                            <p className='info_detail-feedback'>CarBreezy and the professional staff for creating a memorable car buying experience. Wish CarBreezy more and more development and continue to bring joy to many other customers like me.</p>
                            <p className='info-title-footer-c'>Mr. Michael Gillian - New York</p>
                            <p className='info-car'>Ferrari Purosangue 2024</p>
                        </div>
                    </div>
                </div>

                {/* banner */}
                <div className='banner'>
                    <p className='title-banner'>CarBreezy -  Used Car Trading Platform</p>
                    <div style={{ justifyContent: "center", display: "flex", gap: "20px" }}>
                        <button className='btn-buyCar'>Buy car now</button>
                        <button className='btn-sellCar'>Sell car now</button>
                    </div>
                </div>


                {/* footer */}
                <footer>
                    <div className="container_footer">
                        <div className='col-left_footer'>
                            <img className='logo logo-footer' src="../img/Group_193-removebg-preview.png" alt="" />
                            <p className='slogan'>With the motto of bringing customers more value and simplifying the car buying process. </p>
                            <div className='social-box'>
                                <img className='logo-social' src="../img/icon-FB.svg" alt="" />
                                <img className='logo-social' src="../img/icon-INS.svg" alt="" />
                                <img className='logo-social' src="../img/icon-yt.svg" alt="" />
                                <img className='logo-social' src="../img/icon-twiiter.svg" alt="" />
                            </div>
                        </div>

                        <div className='col-page'>
                            <p className='title-footer'>Page</p>
                            <Link className='hover-footer' to="/newCar">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-11">
                                        <path d="M8.25 10.875a2.625 2.625 0 1 1 5.25 0 2.625 2.625 0 0 1-5.25 0Z" />
                                        <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25Zm-1.125 4.5a4.125 4.125 0 1 0 2.338 7.524l2.007 2.006a.75.75 0 1 0 1.06-1.06l-2.006-2.007a4.125 4.125 0 0 0-3.399-6.463Z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Search</span>
                                </div>
                            </Link>

                            <Link className='hover-footer' to="/FAQ">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-11">
                                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm11.378-3.917c-.89-.777-2.366-.777-3.255 0a.75.75 0 0 1-.988-1.129c1.454-1.272 3.776-1.272 5.23 0 1.513 1.324 1.513 3.518 0 4.842a3.75 3.75 0 0 1-.837.552c-.676.328-1.028.774-1.028 1.152v.75a.75.75 0 0 1-1.5 0v-.75c0-1.279 1.06-2.107 1.875-2.502.182-.088.351-.199.503-.331.83-.727.83-1.857 0-2.584ZM12 18a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                    </svg>
                                    <span>FAQ</span>
                                </div>
                            </Link>

                            <a className='hover-footer' href="">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-11">
                                        <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 0 1 .67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 1 1-.671-1.34l.041-.022ZM12 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clip-rule="evenodd" />
                                    </svg>
                                    <span>About</span>
                                </div>
                            </a>
                        </div>

                        <div className='col-page contact'>
                            <p className='title-footer'>Contact Us</p>
                            <a className='hover-footer' href="">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-11">
                                        <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                                        <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
                                    </svg>
                                    <span>carbreezyCar@gmail.com</span>
                                </div>
                            </a>

                            <a className='hover-footer' href="">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-11">
                                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z" clip-rule="evenodd" />
                                    </svg>
                                    <span>Hotline: <u>0825 355 355</u></span>
                                </div>
                            </a>
                        </div>
                    </div>

                    <hr className='hr-footer' />
                    <p className='right'><span className='color'>©CarBreezy</span> 2024. All rights reserved.</p>
                    <marquee width="100%" direction="left" height="20px">
                        10/12/2024 - 08:07 - TPHCM
                    </marquee>
                </footer>
            </div >

            <Routes>
                <Route path='/FAQ' element={<FAQComponent />}></Route>
            </Routes>


        </div >
    );
}

export default Home;
