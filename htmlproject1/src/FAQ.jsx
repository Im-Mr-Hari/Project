import { Link, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Footer from "./Footer";

const FAQComponent = () => {
    // State lưu trạng thái mở/đóng
    const [activeIndex, setActiveIndex] = useState(null);

    // Danh sách câu hỏi và trả lời
    const faqs = [
        {
            question: "How can I buy a car from CarBreezy?",
            answer: "You can visit our website, select the car you want and contact us by phone or email to complete the transaction.",
        },
        {
            question: "Does CarBreezy provide maintenance and repair services?",
            answer: "No, but we can refer you to reputable maintenance and repair service providers.",
        },
        {
            question: "Does CarBreezy provide home delivery service?",
            answer: "Yes, we offer home delivery service within the city and surrounding areas with reasonable shipping charges.",
        },
        {
            question: "How can I contact CarBreezy?",
            answer: "You can contact us by phone, email, or in person. Details are available on our website.",
        },
        {
            question: "Does CarBreezy provide financial support when purchasing a car?",
            answer: "No, we do not currently offer vehicle financing.",
        },
        {
            question: "What payment methods does CarBreezy have?",
            answer: "We accept cash and bank transfer payments.",
        },
    ];

    // Hàm bật/tắt nội dung câu hỏi
    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div>
            {/* space white  */}
            <div className="space-white"></div>

            {/* Frequently Asked Questions */}
            <main>
                <p className="title-FAQ">Frequently Asked Questions</p>
                <p className="desc-FAQ">Do you need help with something or have a question about our service?</p>

                <div className='container-question'>
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            style={{
                                marginBottom: "10px",
                                border: "1px solid #ccc",
                                borderRadius: "5px",
                                overflow: "hidden",
                            }}
                        >
                            {/* Phần tiêu đề câu hỏi */}
                            <div
                                onClick={() => toggleFAQ(index)}
                                style={{
                                    padding: "15px",
                                    backgroundColor: "#fff",
                                    display: "flex",
                                    justifyContent: "space-between",
                                    cursor: "pointer",
                                }}
                            >
                                <span className='question-faq'>{faq.question}</span>
                                <span>{activeIndex === index ? "-" : "+"}</span>
                            </div>

                            {/* Phần nội dung hiển thị khi nhấn */}
                            {activeIndex === index && (
                                <div
                                    style={{
                                        padding: "15px", paddingLeft: "25px",
                                        paddingTop: "10px",
                                        backgroundColor: "#fff", color: "#555", boxShadow: "none", marginTop: "-10px", fontSize: "16px"
                                    }}>
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </main>

            {/* More Question */}
            <div className="box_more-question">
                <p className='title-have-other'>Have other question?</p>
                <p className='not-hesitate'>Don't hesitate to email us with your questions or comments:</p>
                <a href="mailto:support@carbreezy.com?subject=More%20Question%20For%20CarBreezy">
                    <button className='btn-support'>support@carbreezy.com</button>
                </a>

            </div>

            {/* footer */}
            {/* <footer>
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
            </footer> */}
            <Footer />
        </div >
    );
};

export default FAQComponent;
