import React from 'react'
import CTA from '../cta/CTA'

const whatbelieve = ({ content }) => {
    const { title, cardContent, cta1Txt, cta2Txt } = content
    return (
        <section className='py-12 lg:py-20 bg-[#0C0C0C]'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins text-white text-center mb-4 lg:mb-12'>{title}</h2>
                        <div className="flex flex-wrap items-center gap-y-7 sm:gap-y-20 justify-center">
                            {cardContent.map((data, index) => (
                                <div key={index} className='sm:w-[50%] lg:w-[33.3%]'>
                                    <h3 className='text-[20px] lg:text-[25px] tracking-wide font-semibold font-poppins text-white sm:text-left text-center mb-3'>
                                        {data.title}
                                    </h3>
                                    <p className='text-[14px] 2xl:text-[16px] tracking-wide leading-relaxed font-poppins text-white w-10/12 lg:w-full xl:w-10/12 mx-auto sm:ml-0 sm:text-left text-center'>{data.desc}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex items-center justify-center gap-3 sm:gap-6 md:gap-8 mt-12">
                            <CTA
                                text={cta1Txt}
                                href="tel:123456789"
                            />
                            <CTA
                                text={cta2Txt}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default whatbelieve
