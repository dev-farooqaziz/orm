"use client";
//========== Imports
import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Axios from "axios";
import { usePathname } from "next/navigation"
//========== Import Components
import { CTA } from "@/components";
//========== Imports Icons
import { FaWindowClose } from 'react-icons/fa';
//========== Import Images
import icon1 from "media/pressIcons/icon1.png";
import icon2 from "media/pressIcons/icon2.png";
import icon3 from "media/pressIcons/icon3.png";
import icon4 from "media/pressIcons/icon4.png";
import icon5 from "media/pressIcons/icon5.png";
import icon6 from "media/pressIcons/icon6.png";
import icon7 from "media/pressIcons/icon7.png";
import icon8 from "media/pressIcons/icon8.png";
import icon9 from "media/pressIcons/icon9.png";

//========== Cards Data
const cardsData = [
    { Icons: icon1 },
    { Icons: icon2 },
    { Icons: icon3 },
    { Icons: icon4 },
    { Icons: icon5 },
    { Icons: icon6 },
    { Icons: icon7 },
    { Icons: icon8 },
    { Icons: icon9 },
];

const Channels = ({ content }) => {
    const { title, para, cardBg, cardBgHvr } = content;
    //========== Popup
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    //========== Open Popup
    const openPopup = () => {
        setIsPopupOpen(true);
        setTimeout(() => {
            const popup = document.querySelector('.popup');
            if (popup) {
                popup.classList.add('popup-enter');
            }
        }, 100);
    };
    //========== Close Popup
    const closePopup = () => {
        const popup = document.querySelector('.popup');
        if (popup) {
            popup.classList.add('popup-exit');
            setTimeout(() => {
                setIsPopupOpen(false);
                popup.classList.remove('popup-exit');
            }, 500);
        }
    };
    //========== Form
    const [ip, setIP] = useState('');
    const [pagenewurl, setPagenewurl] = useState('');
    const [errors, setErrors] = useState({});
    const [formStatus, setFormStatus] = useState('Subscribe');
    const [isDisabled, setIsDisabled] = useState(false);
    const [data, setData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    //========== Fetch IP data from the API
    const getIPData = async () => {
        try {
            const res = await Axios.get('https://ipwho.is/');
            setIP(res.data);
        } catch (error) {
            console.error('Error fetching IP data:', error);
        }
    };

    useEffect(() => {
        getIPData();
        setPagenewurl(window.location.href);
    }, []);

    const router = usePathname();
    const currentRoute = router;

    const handleDataChange = (e) => {
        setData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const formValidateHandle = () => {
        let errors = {};
        if (!data.name.trim()) {
            errors.name = "Name is required";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!data.email.match(emailRegex)) {
            errors.email = "Valid email is required";
        }
        const phoneRegex = /^[0-9]+$/;
        if (!data.phone.match(phoneRegex)) {
            errors.phone = "Valid phone number is required";
        }
        return errors;
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        setFormStatus("Processing...");
        setIsDisabled(true);

        const errors = formValidateHandle();
        setErrors(errors);

        if (Object.keys(errors).length === 0) {
            const currentdate = new Date().toLocaleString();
            const dataToSend = {
                ...data,
                pageUrl: pagenewurl,
                IP: `${ip.ip} - ${ip.country} - ${ip.city}`,
                currentdate: currentdate,
            };
            const JSONdata = JSON.stringify(dataToSend);

            try {
                //========== First API call to your server
                await fetch('/api/email/', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json, text/plain, */*',
                        'Content-Type': 'application/json'
                    },
                    body: JSONdata
                });

                //========== Second API call to SheetDB
                let headersList = {
                    "Accept": "*/*",
                    "User-Agent": "Thunder Client (https://www.thunderclient.com)",
                    "Authorization": "Bearer ke2br2ubssi4l8mxswjjxohtd37nzexy042l2eer",
                    "Content-Type": "application/json"
                };
                let bodyContent = JSON.stringify({
                    "IP": `${ip.ip} - ${ip.country} - ${ip.city}`,
                    "Brand": "Infinity Animations",
                    "Page": `${currentRoute}`,
                    "Date": currentdate,
                    "Time": currentdate,
                    "JSON": JSONdata,
                });
                await fetch("", {
                    method: "POST",
                    body: bodyContent,
                    headers: headersList
                });

                setFormStatus("Success...");
                setTimeout(() => {
                    window.location.href = '/thank-you';
                }, 2000);
            } catch (error) {
                console.error('Error during form submission:', error);
                setFormStatus("Failed...");
                setIsDisabled(false);
            }
        } else {
            setFormStatus("Failed...");
            setIsDisabled(false);
        }
    };

    return (
        <section className="py-12 lg:py-20">
            <div className="container">
                <div className="mb-12 mx-auto">
                    <h2 className="text-[35px] md:text-[40px] xl:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-black text-center mb-3">
                        {title}
                    </h2>
                    <p className="text-[16px] tracking-wide leading-loose font-poppins text-black text-center w-full lg:w-10/12 xl:w-8/12 mx-auto">
                        {para}
                    </p>
                </div>
                <div className="grid grid-cols-12 gap-y-6 md:gap-10">
                    {cardsData.map((item, index) => (
                        <div key={index} className="col-span-12 md:col-span-6 lg:col-span-4 h-[200px] md:h-[180px] xl:h-[250px] cursor-pointer" onClick={openPopup}>
                            <div className="h-full relative z-10 overflow-hidden rounded-[10px] shadow-custom group flex flex-col justify-center items-center">
                                <Image src={cardBg} alt="ORM" fill={true} className="-z-10 object-cover object-bottom opacity-100 group-hover:opacity-0 transition-all duration-700" />
                                <Image src={cardBgHvr} alt="ORM" fill={true} className="-z-10 object-cover object-bottom opacity-0 group-hover:opacity-100 transition-all duration-700" />
                                <div className="flex flex-col gap-6 justify-center items-center p-8 pt-12 cursor-default">
                                    <Image src={item.Icons} alt="ORM" className="w-[80px] mx-auto group-hover:invert" />
                                    <p className="text-[16px] tracking-wide font-poppins font-medium text-black group-hover:text-white transition-all duration-700">
                                        Book A Consultation
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="w-max mx-auto mt-8 lg:mt-12">
                    <CTA
                        text="Book a Consultation"
                        href="tel:123456789"
                    />
                </div>
                {/* ========Popup======== */}
                {isPopupOpen && (
                    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-50">
                        <div className={`w-11/12 lg:w-6/12 mx-auto relative bg-white rounded-lg shadow-lg p-3 lg:p-6 popup`}>
                            <div className="absolute top-1 lg:top-2 right-1 lg:right-2 cursor-pointer" onClick={closePopup}>
                                <FaWindowClose className='text-[20px] lg:text-[25px]' />
                            </div>
                            <div className="flex flex-col border border-[#CFCFCF]">
                                <div className="bg-[#F3F3F3] py-5 px-3 lg:px-6 border-b border-[#CFCFCF]">
                                    <div className="flex items-center justify-between mb-2">
                                        <h3 className='text-[16px] md:text-[20px] tracking-wide font-poppins font-bold text-black'>
                                            Work With Us?
                                        </h3>
                                        <h4 className="text-[25px] lg:text-[30px] xl:text-[40px] leading-[35px] lg:leading-[40px] xl:leading-[50px] font-extrabold font-poppins text-primary">
                                            <sup className="text-black text-[16px] md:text-[25px]">$</sup>
                                            <span>2999</span>
                                        </h4>
                                    </div>
                                    <p className='text-[14px] font-poppins leading-normal font-normal text-black'>
                                        Affordable plan with essential services for consistent, reliable performance results.
                                    </p>
                                </div>
                                {/* ===== Form ===== */}
                                <div className="grid grid-cols-1 items-center gap-5 py-5 px-2 lg:px-6">
                                    <form onSubmit={handleFormSubmit}>
                                        <div className="name relative mb-4 w-full">
                                            <input type="text" name="name" placeholder='Name *' className="text-[14px] text-[#000] px-5 font-normal placeholder:text-[#000] placeholder:font-normal poppins block h-[50px] w-full backdrop-blur bg-[#F3F3F3] outline-none" onChange={handleDataChange} />
                                            {errors.name && (
                                                <span className="text-[11px] block p-2 poppins font-bold text-primary absolute left-0 bottom-[-48%] lg:bottom-[-46%] z-50">
                                                    {errors.name}
                                                </span>
                                            )}
                                        </div>
                                        <div className="email relative mb-4 w-full">
                                            <input type="email" name="email" placeholder='Email *' className="text-[14px] text-[#000] px-5 font-normal placeholder:text-[#000] placeholder:font-normal poppins block h-[50px] w-full backdrop-blur bg-[#F3F3F3] outline-none" onChange={handleDataChange} />
                                            {errors.email && (
                                                <span className="text-[11px] block p-2 poppins font-bold text-primary absolute left-0 bottom-[-48%] lg:bottom-[-46%] z-50">
                                                    {errors.email}
                                                </span>
                                            )}
                                        </div>
                                        <div className="phone relative mb-4 w-full">
                                            <input type="phone" name="phone" placeholder='Phone Number *' minLength={7} maxLength={15} className="text-[14px] text-[#000] px-5 font-normal placeholder:text-[#000] placeholder:font-normal poppins block h-[50px] w-full backdrop-blur bg-[#F3F3F3] outline-none" onChange={handleDataChange} />
                                            {errors.phone && (
                                                <span className="text-[11px] block p-2 poppins font-bold text-primary absolute left-0 bottom-[-48%] lg:bottom-[-46%] z-50">
                                                    {errors.phone}
                                                </span>
                                            )}
                                        </div>
                                        <div className="message relative mb-4 w-full">
                                            <textarea name='message' placeholder='Message' rows={5} className="pt-4 text-[14px] text-[#000] px-5 font-normal placeholder:text-[#000] placeholder:font-normal poppins block w-full resize-none backdrop-blur bg-[#F3F3F3] outline-none rounded-none" onChange={handleDataChange}></textarea>
                                        </div>
                                        <div className="btn text-center">
                                            <button type='submit' className='py-[10px] w-8/12 lg:w-5/12 border-0 text-white text-[16px] leading-[25px] capitalize font-medium bg-primary poppins rounded-[5px]' disabled={isDisabled}>
                                                {formStatus}
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Channels;
