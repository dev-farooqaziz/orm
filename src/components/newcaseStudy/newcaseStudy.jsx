import React from 'react'
import CTA from '../cta/CTA'
import Image from 'next/image'


const NewcaseStudy = ({ content }) => {
    const { title, caseStudies, cta1Txt, cta2Txt } = content;
    return (
        <section className='pt-12 lg:py-20'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins text-black text-center mb-3 lg:mb-5'>{title}</h2>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-7 xl:gap-x-10 gap-y-9">
                    {caseStudies.map((data, index) => (
                        <div key={index} className="card">
                            <Image src={data.image} alt='Case Studies' className='w-full' />
                            <div>
                                <h3 className='text-[20px] lg:text-[25px] tracking-wide font-semibold font-poppins text-black sm:text-left text-center mb-2 mt-4'>{data.title}</h3>
                                <p className='text-[14px] 2xl:text-[16px] tracking-wide leading-snug font-montserrat text-[#8D8D8D] sm:text-left text-center md:h-[130px] lg:h-[150px] xl:h-[130px]'>{data.desc}</p>
                                <div className="flex items-center justify-center sm:justify-start gap-3 sm:gap-6 xl:gap-8 mt-10">
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
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewcaseStudy
