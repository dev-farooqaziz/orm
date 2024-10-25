import React from 'react'
import Image from 'next/image';
//========== Import Images
import logo from 'media/icons/black-logo.png'

const aboutorm = ({ content }) => {
    const { title, desc } = content;
    return (
        <section className='py-12 lg:py-20'>
            <div className="container">
                <div className="grid grid-cols-12 items-center gap-y-3 md:gap-y-5">
                    <div className="col-span-12 lg:col-span-3">
                        <div className='lg:border-r-2 border-r-[#707070] py-[10px]'>
                            <h2 className='text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins text-black text-center lg:text-left'>{title}</h2>
                            <Image src={logo} alt='Logo' className='w-7/12 md:w-5/12 lg:w-10/12 mx-auto lg:ml-0' />
                        </div>
                    </div>
                    <div className="col-span-12 lg:col-span-9">
                        <div className='lg:pl-[30px] xl:pl-[50px]'>
                            {desc.map((content, index) => (
                                <p key={index} className={`text-[14px] xl:text-[16px] tracking-wide leading-loose font-poppins text-black 2xl:w-11/12 text-center lg:text-left ${index !== desc.length - 1 ? 'mb-4' : ''}`}>{content.text}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default aboutorm
