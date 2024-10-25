import React from 'react'
import Image from 'next/image'
// Images
import Platform1 from "media/icons/platform1.png"
import Platform2 from "media/icons/platform2.png"
import Platform3 from "media/icons/platform3.png"

const platforms = () => {
    return (
        <section className='bg-black py-12 lg:py-20'>
            <div className="container">
                <div className="grid grid-cols-12">
                    <div className="col-span-12">
                        <h2 className='text-[30px] md:text-[40px] xl:text-[50px] tracking-wide xl:leading-tight font-semibold font-poppins text-white text-center mb-4'><span className='text-primary'>Platforms</span> Used:</h2>
                        <div className="flex flex-wrap items-center justify-between gap-4 lg:w-9/12 mx-auto mt-5 lg:mt-10">
                            <div className="google bg-[#323232] rounded-[15px] py-[10px] w-[50%] sm:w-[30%] xl:w-[25%] mx-auto sm:ml-auto">
                                <Image src={Platform1} alt='Platform' className='w-[75%] mx-auto' />
                            </div>
                            <div className="google bg-[#323232] rounded-[15px] py-[10px] w-[50%] sm:w-[30%] xl:w-[25%] mx-auto sm:ml-auto">
                                <Image src={Platform2} alt='Platform' className='w-[75%] mx-auto' />
                            </div>
                            <div className="google bg-[#323232] rounded-[15px] py-[10px] w-[50%] sm:w-[30%] xl:w-[25%] mx-auto sm:ml-auto">
                                <Image src={Platform3} alt='Platform' className='w-[75%] mx-auto' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default platforms
