"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";
//========== Import Icons
import { FaAngleDoubleLeft, FaAngleDown, FaBars, FaTimes } from "react-icons/fa";
//========== Import Images
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
                        <Link href="/" className="h-full flex items-center text-[24px] font-bold font-poppins cursor-pointer lg:w-[160px] xl:w-[180px] lg:ml-2">
                            <Image src={logo} alt="Logo" className="w-[80%]" />
                        </Link>
                    </div>
                    <div className="lg:flex items-center gap-20 h-full">
                        <div className={`w-[85%] md:w-[80%] lg:w-auto h-[100vh] lg:h-full flex items-center fixed top-0 z-50 lg:static bg-[#484848] lg:bg-transparent ${isMenuOpen ? 'left-0 duration-700 ease-in-out' : 'left-[-100%] duration-700 ease-in-out'}`} id="navbar-default">
                            <ul className="w-full h-full flex lg:items-center flex-col lg:flex-row lg:gap-10 xl:gap-14 space-y-10 lg:space-y-0 p-5 lg:p-0 relative">
                                <li>
                                    <Link href="/" className="text-[34px] font-bold font-poppins text-white cursor-pointer block lg:hidden">
                                        <Image src={logo} alt="Logo" className="w-[50%] md:w-[25%]" />
                                    </Link>
                                </li>
                                <li className="lg:h-full flex lg:items-center">
                                    <Link href="/" className="lg:h-full flex lg:items-center text-[20px] lg:text-[16px] font-medium font-poppins text-white hover:text-primary" onClick={toggleMenu}>Home</Link>
                                </li>
                                <li className="lg:h-full flex lg:items-center">
                                    <Link href="#about-us" className="lg:h-full flex lg:items-center text-[20px] lg:text-[16px] font-medium font-poppins text-white hover:text-primary" onClick={toggleMenu}>About</Link>
                                </li>
                                <li className="lg:h-full flex lg:items-center group">
                                    <Link href="#" className="lg:h-full flex items-center gap-[2px] text-[20px] lg:text-[16px] font-medium font-poppins text-white hover:text-primary" onClick={toggleMegaMenu}>
                                        <span>Services</span>
                                    </Link>
                                </li>
                                <li className="lg:h-full flex lg:items-center group">
                                    <Link href="#" className="lg:h-full flex items-center gap-[2px] text-[20px] lg:text-[16px] font-medium font-poppins text-white hover:text-primary" onClick={toggleMegaMenu2}>
                                        <span>Casestudy</span>
                                    </Link>
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



