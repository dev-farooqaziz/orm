import React from 'react'
import Image from 'next/image'
// ============ Btn Image
import Arrow from "media/icons/arrowRight.png"

const contactForm = () => {
    return (
        <section className='pt-12 lg:pt-20 bg-white'>
            <div className="container">
                <form>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-6 lg:gap-y-9">
                        <div className="bussinessprofile">
                            <label htmlFor="bussinessprofile" className='text-[14px] xl:text-[18px] leading-[24px] xl:leading-[28px] font-medium font-poppins block mb-[7px] xl:mb-[12px]'>Google Business Profile URL*</label>
                            <input type="text" name='bussinessprofile' placeholder='Enter Google Business Profile URL*' className='bg-[#F5F5F5] h-[55px] xl:h-[67px] w-full rounded-[8px] px-[18px] xl:px-[26px] placeholder:text-[14px] xl:placeholder:text-[17px] placeholder:leading-[23px] xl:placeholder:leading-[26px] placeholder:font-light font-poppins focus:outline-0' />
                        </div>
                        <div className="websiteurl">
                            <label htmlFor="websiteurl" className='text-[14px] xl:text-[18px] leading-[24px] xl:leading-[28px] font-medium font-poppins block mb-[7px] xl:mb-[12px]'>Website URL*</label>
                            <input type="text" name='websiteurl' placeholder='Enter Website URL' className='bg-[#F5F5F5] h-[55px] xl:h-[67px] w-full rounded-[8px] px-[18px] xl:px-[26px] placeholder:text-[14px] xl:placeholder:text-[17px] placeholder:leading-[23px] xl:placeholder:leading-[26px] placeholder:font-light font-poppins focus:outline-0' />
                        </div>
                        <div className="reviews">
                            <label htmlFor="reviews" className='text-[14px] xl:text-[18px] leading-[24px] xl:leading-[28px] font-medium font-poppins block mb-[7px] xl:mb-[12px]'>Reviews Per Week*</label>
                            <input type="text" name='reviews' placeholder='From 1-3' className='bg-[#F5F5F5] h-[55px] xl:h-[67px] w-full rounded-[8px] px-[18px] xl:px-[26px] placeholder:text-[14px] xl:placeholder:text-[17px] placeholder:leading-[23px] xl:placeholder:leading-[26px] placeholder:font-semibold placeholder:text-black font-poppins focus:outline-0' disabled />
                        </div>
                        <div className="reviewsrating">
                            <label htmlFor="reviewsrating" className='text-[14px] xl:text-[18px] leading-[24px] xl:leading-[28px] font-medium font-poppins block mb-[7px] xl:mb-[12px]'>Reviews Rating*</label>
                            <input type="text" name='reviewsrating' placeholder='5 Star' className='bg-[#F5F5F5] h-[55px] xl:h-[67px] w-full rounded-[8px] px-[18px] xl:px-[26px] placeholder:text-[14px] xl:placeholder:text-[17px] placeholder:leading-[23px] xl:placeholder:leading-[26px] placeholder:font-semibold placeholder:text-black font-poppins focus:outline-0' disabled />
                        </div>
                        <div className="additionalintstructions">
                            <label htmlFor="additionalintstructions" className='text-[14px] xl:text-[18px] leading-[24px] xl:leading-[28px] font-medium font-poppins block mb-[7px] xl:mb-[12px]'>Additional Instructions</label>
                            <textarea name="additionalintstructions" placeholder='Additional Instructions' className='bg-[#F5F5F5] h-[195px] w-full rounded-[8px] pt-[20px] px-[18px] xl:px-[26px] placeholder:text-[14px] xl:placeholder:text-[17px] placeholder:leading-[23px] xl:placeholder:leading-[26px] placeholder:font-light font-poppins focus:outline-0 resize-none'></textarea>
                        </div>
                        <div className="submitreviews">
                            <label htmlFor="submitreviews" className='text-[14px] xl:text-[18px] leading-[24px] xl:leading-[28px] font-medium font-poppins block mb-[7px] xl:mb-[12px]'>Submit Reviews Content Below</label>
                            <textarea name='submitreviews' placeholder='Submit Reviews Content Below' className='bg-[#F5F5F5] h-[195px] w-full rounded-[8px] pt-[20px] px-[18px] xl:px-[26px] placeholder:text-[14px] xl:placeholder:text-[17px] placeholder:leading-[23px] xl:placeholder:leading-[26px] placeholder:font-light font-poppins focus:outline-0 resize-none'></textarea>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mt-6 xl:mt-12">
                        <div className="submitreviews">
                            <label htmlFor="submitreviews" className='text-[14px] xl:text-[18px] leading-[24px] xl:leading-[28px] font-medium font-montserrat block mb-[15px]'>Attachments here</label>
                            <input type="file" name='submitreviews' className='font-normal text-[#A2A9B0] font-poppins focus:outline-0 w-full file:bg-black file:text-white file:font-normal file:border-none file:px-5 file:py-3 file:mr-6 file:rounded-[7px]' />
                        </div>
                        <div className="button w-full sm:w-max block">
                            <button className='bg-[#24BF5A] w-full sm:w-[205px] h-[46px] rounded-[8px] flex items-center justify-center gap-x-4 text-[16px] leading-[25px] font-normal font-poppins text-white'>
                                Submit Details
                                <Image src={Arrow} alt='Arrow' width={24} height={24} className='brightness-[100]'/>
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default contactForm
