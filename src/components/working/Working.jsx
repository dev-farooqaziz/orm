import React from "react";
import Image from "next/image";

const Working = ({ content }) => {
    const { title, para, workingImg } = content;
    return (
        <>
            <section className="py-12 lg:py-20">
                <div className="container">
                    <div className="w-full lg:w-10/12 xl:w-8/12 mx-auto">
                        <h2 className="text-[40px] md:text-[50px] tracking-wide leading-tight font-semibold font-poppins text-black text-center mb-4">{title}</h2>
                        <p className="text-[16px] tracking-wide leading-loose font-poppins text-black text-center">{para}</p>
                    </div>
                    <div className="mt-8 md:mt-14 xl:mt-20">
                        <Image src={workingImg} alt="ORM" />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Working;