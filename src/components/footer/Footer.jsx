import React from "react";
import Link from "next/link";
import Image from "next/image";
//========== Import Components
import { CTA } from "@/components";
//========== Import Icons
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";
//========== Import Images
import logo from 'media/icons/logo.png'
import footerIcon from 'media/icons/footerIcon.png'
import Lisbon from 'media/footerLisbon.png'
import London from 'media/footerLondon.png'
import NYC from 'media/footerNYC.png'

const Footer = () => {
    return (
        <>
            <footer className="pt-12 xl:pt-20 bg-black">
                <div className="container">
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-14 xl:gap-x-[250px] pb-10">
                        <div className="flex flex-col md:flex-row xl:flex-col items-start md:items-end lg:items-start justify-between xl:justify-start gap-5">
                            <div className="flex flex-col gap-5">
                                <Link href="/" className="h-full flex items-center text-[24px] font-bold font-poppins cursor-pointer lg:w-[160px] xl:w-[180px] mb-5 lg:mb-0">
                                    <Image src={logo} alt="Logo" className="w-[40%] md:w-[50%] lg:w-[80%]" />
                                </Link>
                                <h2 className="text-[30px] md:text-[40px] tracking-wide leading-tight font-semibold font-poppins text-white mb-4">Let’s Talk About <span className="text-primary inline md:block lg:inline xl:block">Your Project!</span></h2>
                                <div className="flex items-center gap-6 md:gap-10 xl:gap-5">
                                    <CTA
                                        text="Explore The Platform"
                                        href="tel:123456789"
                                    />
                                    <CTA
                                        text="Watch Demo"
                                    />
                                </div>
                            </div>
                            <div className="mt-6">
                                <Image src={footerIcon} alt="ORM" className="w-[90%]" />
                            </div>
                        </div>
                        <div className="flex flex-col gap-10">
                            <div className="flex items-end gap-5 md:gap-20 xl:gap-10">
                                <Image src={Lisbon} alt="ORM" className="w-[35%] md:w-[30%]" />
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[16px] font-semibold tracking-wide font-poppins text-white">USA, LA (HQ)</h3>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[14px] font-light tracking-wide font-poppins text-white">
                                            <span>Address:</span>
                                            <a href="#"> Office abc street</a>
                                        </p>
                                        <p className="text-[14px] font-light tracking-wide font-poppins text-white">
                                            <span>Phone:</span>
                                            <a href="tel:123456789"> (012) 345-6789</a>
                                        </p>
                                        <p className="text-[14px] font-light tracking-wide font-poppins text-white">
                                            <span>Email:</span>
                                            <a href="mailt:info@xyz.com"> info@xyz.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-end gap-5 md:gap-20 xl:gap-10">
                                <Image src={London} alt="ORM" className="w-[35%] md:w-[30%]" />
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[16px] font-semibold tracking-wide font-poppins text-white">LONDON</h3>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[14px] font-light tracking-wide font-poppins text-white">
                                            <span>Address:</span>
                                            <a href="#"> Office abc street</a>
                                        </p>
                                        <p className="text-[14px] font-light tracking-wide font-poppins text-white">
                                            <span>Phone:</span>
                                            <a href="tel:123456789"> (012) 345-6789</a>
                                        </p>
                                        <p className="text-[14px] font-light tracking-wide font-poppins text-white">
                                            <span>Email:</span>
                                            <a href="mailt:info@xyz.com"> info@xyz.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-end gap-5 md:gap-20 xl:gap-10">
                                <Image src={NYC} alt="ORM" className="w-[35%] md:w-[30%]" />
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[16px] font-semibold tracking-wide font-poppins text-white">USA, NYC</h3>
                                    <div className="flex flex-col gap-1">
                                        <p className="text-[14px] font-light tracking-wide font-poppins text-white">
                                            <span>Address:</span>
                                            <a href="#"> Office abc street</a>
                                        </p>
                                        <p className="text-[14px] font-light tracking-wide font-poppins text-white">
                                            <span>Phone:</span>
                                            <a href="tel:123456789"> (012) 345-6789</a>
                                        </p>
                                        <p className="text-[14px] font-light tracking-wide font-poppins text-white">
                                            <span>Email:</span>
                                            <a href="mailt:info@xyz.com"> info@xyz.com</a>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center justify-between md:justify-start md:gap-14 xl:gap-10 mt-6">
                                <Link href="javascript:;" className="bg-white p-2 rounded-md cursor-pointer group hover:bg-primary hover:duration-700 duration-700 ease-in-out">
                                    <FaFacebookF className="text-[25px] group-hover:text-white group-hover:duration-700 duration-700 ease-in-out" />
                                </Link>
                                <Link href="javascript:;" className="bg-white p-2 rounded-md cursor-pointer group hover:bg-primary hover:duration-700 duration-700 ease-in-out">
                                    <FaTwitter className="text-[25px] group-hover:text-white group-hover:duration-700 duration-700 ease-in-out" />
                                </Link>
                                <Link href="javascript:;" className="bg-white p-2 rounded-md cursor-pointer group hover:bg-primary hover:duration-700 duration-700 ease-in-out">
                                    <FaInstagram className="text-[25px] group-hover:text-white group-hover:duration-700 duration-700 ease-in-out" />
                                </Link>
                                <Link href="javascript:;" className="bg-white p-2 rounded-md cursor-pointer group hover:bg-primary hover:duration-700 duration-700 ease-in-out">
                                    <FaLinkedinIn className="text-[25px] group-hover:text-white group-hover:duration-700 duration-700 ease-in-out" />
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="border-t border-[#9B9B9B] py-10">
                        <div className="flex items-center justify-center lg:justify-between gap-y-5 gap-x-10 lg:gap-0 flex-wrap">
                            <p className="text-[14px] font-light tracking-wide font-poppins text-[#848484]">© 2024 Name Inc</p>
                            <p className="text-[14px] font-light tracking-wide font-poppins text-[#848484]">All Rights Reserved</p>
                            <p className="text-[14px] font-light tracking-wide font-poppins text-[#848484]">Terms & Conditions</p>
                            <p className="text-[14px] font-light tracking-wide font-poppins text-[#848484]">Privacy Policy</p>
                            <p className="text-[14px] font-light tracking-wide font-poppins text-[#848484]">Security</p>
                            <p className="text-[14px] font-light tracking-wide font-poppins text-[#848484]">GDPR</p>
                            <p className="text-[14px] font-light tracking-wide font-poppins text-[#848484]">HIPAA</p>
                            <p className="text-[14px] font-light tracking-wide font-poppins text-[#848484]">CCPA</p>
                            <p className="text-[14px] font-light tracking-wide font-poppins text-[#848484]">Generative AI Policy</p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
