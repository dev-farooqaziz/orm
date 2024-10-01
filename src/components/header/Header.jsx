"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";
//========== Import Icons
import { FaAngleDoubleLeft, FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
//========== Import Icons
import logo from 'media/icons/logo.png'

const Header = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
    const [isMegaMenuOpen2, setIsMegaMenuOpen2] = useState(false);
    // ========= Header Fixed
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsFixed(true);
            } else {
                setIsFixed(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    // ========= Mobile Menu
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    // ========= MegaMenu1
    const toggleMegaMenu = () => {
        setIsMegaMenuOpen(!isMegaMenuOpen);
    };
    // ========= MegaMenu2
    const toggleMegaMenu2 = () => {
        setIsMegaMenuOpen2(!isMegaMenuOpen2);
    };

    return (

        <header className={`w-full z-[999] rounded-none h-[80px] flex items-center ${isFixed ? 'fixed top-0 left-0 w-full duration-1000 ease-in-out bg-black/90 shadow-md' : 'absolute duration-1000 ease-in-out bg-transparent shadow-md lg:shadow-none'}`}>
            <div className="container h-full flex items-center">
                <nav className="w-full h-full flex items-center justify-between mx-auto bg-transparent">
                    <div className="w-full lg:w-auto h-full flex flex-wrap items-center justify-between">
                        <Link href="/" className="h-full flex items-center text-[24px] font-bold font-poppins text-black cursor-pointer lg:w-[160px] xl:w-[180px] lg:ml-2">
                            <Image src={logo} alt="Logo" className="w-[80%]" />
                        </Link>
                    </div>
                    <div className="lg:flex items-center gap-20 h-full">
                        <div className={`w-[85%] md:w-[80%] lg:w-auto h-[100vh] lg:h-full flex items-center fixed top-0 z-50 lg:static bg-[#484848] lg:bg-transparent ${isMenuOpen ? 'left-0 duration-700 ease-in-out' : 'left-[-100%] duration-700 ease-in-out'}`} id="navbar-default">
                            <ul className="w-full h-full flex lg:items-center flex-col lg:flex-row lg:gap-10 xl:gap-14 space-y-10 lg:space-y-0 p-5 lg:p-0 relative">
                                <Link href="/" className="text-[34px] font-bold font-poppins text-white cursor-pointer block lg:hidden">
                                    <Image src={logo} alt="Logo" className="w-[50%] md:w-[25%]" />
                                </Link>
                                <li className="lg:h-full flex lg:items-center">
                                    <Link href="/" className="lg:h-full flex lg:items-center text-[20px] lg:text-[16px] font-medium font-poppins text-white hover:text-primary" onClick={toggleMenu}>Home</Link>
                                </li>
                                <li className="lg:h-full flex lg:items-center">
                                    <Link href="#about-us" className="lg:h-full flex lg:items-center text-[20px] lg:text-[16px] font-medium font-poppins text-white hover:text-primary" onClick={toggleMenu}>About</Link>
                                </li>
                                <li className="lg:h-full flex lg:items-center group">
                                    <Link href="#" className="lg:h-full flex items-center gap-[2px] text-[20px] lg:text-[16px] font-medium font-poppins text-white hover:text-primary" onClick={toggleMegaMenu}>
                                        <span>Services</span>
                                        {/* <FaAngleDown className="mt-[1px]" /> */}
                                    </Link>
                                    {/* <div className={`w-full h-full lg:h-auto flex flex-col lg:flex-row items-center gap-5 lg:gap-10 p-5 rounded-none lg:rounded-xl bg-black absolute z-10 lg:-z-10 top-0 lg:top-[-1150%] lg:left-[0%] lg:group-hover:top-[100%] duration-1000 ease-in-out ${isMegaMenuOpen ? 'left-0 duration-700 ease-in-out' : 'left-[-100%]'}`}>
                                        <div className="w-full flex lg:hidden items-center justify-between mb-5">
                                            <Link href="/" className="text-left text-[34px] font-bold font-poppins text-white cursor-pointer block lg:hidden" onClick={toggleMenu}>
                                                <Image src={logo} alt="Logo" className="w-[50%] md:w-[25%]" />
                                            </Link>
                                            <FaAngleDoubleLeft className="text-[30px] text-white" onClick={toggleMegaMenu} />
                                        </div>
                                        <ul className="flex flex-col space-y-10 lg:space-y-5 w-full mb-5 lg:mb-0">
                                            <li className="cursor-pointer">
                                                <Link href="/mobile-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Mobile App Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/game-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Game App Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/blockchain-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Blockchain Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/artificial-intelligence" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Artificial Intelligence</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/web-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Web App Development</Link>
                                            </li>
                                        </ul>
                                        <ul className="flex flex-col space-y-10 lg:space-y-5 w-full">
                                            <li className="cursor-pointer">
                                                <Link href="/business-intelligence" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Business Intelligence</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/web-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Web Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/uiux-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    UI UX App Design</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/ios-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Ios App Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/android-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Android App Development</Link>
                                            </li>
                                        </ul>
                                    </div> */}
                                </li>
                                <li className="lg:h-full flex lg:items-center group">
                                    <Link href="#" className="lg:h-full flex items-center gap-[2px] text-[20px] lg:text-[16px] font-medium font-poppins text-white hover:text-primary" onClick={toggleMegaMenu2}>
                                        <span>Casestudy</span>
                                        {/* <FaAngleDown className="mt-[1px]" /> */}
                                    </Link>
                                    {/* <div className={`w-full h-full lg:h-auto flex flex-col lg:flex-row items-center gap-5 lg:gap-10 p-5 rounded-none lg:rounded-xl bg-black absolute lg:-z-10 top-0 lg:top-[-1150%] lg:left-[0%] lg:group-hover:top-[100%] duration-1000 ease-in-out ${isMegaMenuOpen2 ? 'left-0 duration-700 ease-in-out' : 'left-[-100%]'}`}>
                                        <div className="w-full flex lg:hidden items-center justify-between mb-5">
                                            <Link href="/" className="text-left text-[34px] font-bold font-poppins text-white cursor-pointer" onClick={toggleMenu}>
                                                <Image src={logo} alt="Logo" className="w-[50%] md:w-[25%]" />
                                            </Link>
                                            <FaAngleDoubleLeft className="text-[30px] text-white" onClick={toggleMegaMenu2} />
                                        </div>
                                        <ul className="flex flex-col space-y-10 lg:space-y-5 w-full">
                                            <li className="cursor-pointer">
                                                <Link href="/business-intelligence" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Business Intelligence</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/web-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Web Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/uiux-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    UI UX App Design</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/ios-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Ios App Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/android-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Android App Development</Link>
                                            </li>
                                        </ul>
                                        <ul className="flex flex-col space-y-10 lg:space-y-5 w-full mb-5 lg:mb-0">
                                            <li className="cursor-pointer">
                                                <Link href="/mobile-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Mobile App Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/game-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Game App Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/blockchain-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Blockchain Development</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/artificial-intelligence" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Artificial Intelligence</Link>
                                            </li>
                                            <li className="cursor-pointer">
                                                <Link href="/web-app-development" className="text-[16px] lg:text-[12px] xl:text-[15px] font-medium font-poppins text-[#b8b8b8] hover:text-primary-100 flex items-center gap-5 lg:gap-2" onClick={toggleMenu}>
                                                    <FaTimes className="text-[20px]" />
                                                    Web App Development</Link>
                                            </li>
                                        </ul>
                                    </div> */}
                                </li>
                                <li className="lg:h-full flex lg:items-center">
                                    <Link href="#contact-us" className="lg:h-full flex lg:items-center text-[20px] lg:text-[16px] font-medium font-poppins text-white hover:text-primary" onClick={toggleMenu}>Contact Us</Link>
                                </li>
                                <div className="w-max flex items-center">
                                    <CTA
                                        text="Book a Consultation"
                                        href="tel:123456789"
                                    />
                                </div>
                            </ul>
                        </div>
                    </div>
                    <div className="block lg:hidden w-max9">
                        {isMenuOpen ? (
                            <FaTimes className="text-white text-[30px] cursor-pointer" onClick={toggleMenu} />
                        ) : (
                            <FaBars className="text-white text-[30px] cursor-pointer" onClick={toggleMenu} />
                        )}
                    </div>
                </nav>
            </div>
        </header>
    );
}
export default Header;



