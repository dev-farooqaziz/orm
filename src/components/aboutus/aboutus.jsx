import React from 'react'
import CTA from '../cta/CTA'

const aboutus = ({ content }) => {
    const { title, desc, cta1Txt, cta2Txt, cardsContent } = content
    return (
        <section className='py-12 lg:pt-20 lg:pb-24'>
            <div className="container">
                <div className="grid grid-cols-12 items-center gap-y-4 sm:gap-7 xl:gap-3">
                    <div className="col-span-12 xl:col-span-5">
                        <h2 className='text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins text-black mb-3 text-center sm:text-left'>{title}</h2>
                        {desc.map((item, index) => (
                            <p key={index} className='text-[16px] tracking-wide leading-relaxed font-poppins text-black mb-5 text-center sm:text-left'>{item.text}</p>
                        ))}
                        <div className="flex items-center justify-center md:justify-start gap-3 sm:gap-6 md:gap-8 mt-8">
                            <CTA
                                text={cta1Txt}
                                href="tel:123456789"
                            />
                            <CTA
                                text={cta2Txt}
                            />
                        </div>
                    </div>
                    <div className="col-span-12 xl:col-span-7">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {cardsContent.map((data, index) => (
                                <div key={index} className={`bg-[#F5F5F5] w-full h-full px-5 py-9 rounded-[8px] ${data.css}`}>
                                    <h3 className='text-[27px] 2xl:text-[30px] leading-relaxed font-poppins font-semibold mb-2 2xl:mb-3'>{data.cardTitle}</h3>
                                    <p className='text-[14px] 2xl:text-[16px] tracking-wide leading-relaxed font-poppins text-black '>{data.cardDesc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default aboutus
