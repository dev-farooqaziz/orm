import React from 'react'
import Image from 'next/image';
// Images
import Check from "media/icons/check.png"
import CTA from '../cta/CTA';

const challanges = ({ content }) => {
    const { title, desc, challangesList, cta1Txt, cta2Txt } = content;
    return (
        <section className='py-12 lg:py-20 bg-[#0C0C0C]'>
            <div className="container">
                <div className="grid grid-cols-12 items-center gap-y-3 md:gap-y-5">
                    <div className="col-span-12 lg:col-span-6">
                        <h2 className='text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins text-white mb-4'>{title}</h2>
                        <p className='text-[16px] tracking-wide leading-loose font-poppins text-white lg:w-11/12'>{desc}</p>
                        <div className="flex items-center gap-3 sm:gap-6 mt-5 lg:mt-8 mb-4 lg:mb-0">
                            <CTA
                                text={cta1Txt}
                                href="tel:123456789"
                            />
                            <CTA
                                text={cta2Txt}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-6">
                        <ul className='xl:pl-[45px]'>
                            {challangesList.map((content, index) => (
                                <li key={index} className='flex items-start gap-4 mb-4 lg:mb-5'>
                                    <Image src={Check} alt='Check' width={17} height={18} className='mt-2' />
                                    <p className='text-[16px] leading-normal font-montserrat text-white'>{content.list}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default challanges
