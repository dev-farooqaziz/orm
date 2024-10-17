"use client"

const CTA = ({ text, href, black }) => {
    return (
        <>
            {black ?
                <a href="tel:123456789" className={`bg-black text-white h-[40px] lg:h-[50px] px-2 2xl:px-6 rounded-[7px] flex items-center gap-x-2`}>
                    <span className="text-[15px] xl:text-[18px] font-normal font-poppins tracking-wide">{text}</span>
                </a> :
                <>
                    {href ?
                        <div dangerouslySetInnerHTML={{
                            __html:
                            `
                                <a href=${href} class="bg-primary text-white border-0 h-[40px] lg:h-[50px] px-2 2xl:px-6 rounded-[7px] flex items-center"> 
                                    <span class="text-[15px] xl:text-[18px] font-normal font-poppins tracking-wide">${text}</span>
                                </a>
                            `
                        }} />
                        :
                        <a href="tel:123456789" className={`bg-transparent text-primary border border-primary h-[40px] lg:h-[50px] px-2 2xl:px-6 rounded-[7px] flex items-center gap-x-2`}>
                            <span className="text-[15px] xl:text-[18px] font-normal font-poppins tracking-wide">{text}</span>
                        </a>
                    }
                </>
            }
        </>
    );
}

export default CTA