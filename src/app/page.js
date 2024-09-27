//=============== Import Components
import { Hero } from "@/components";
//========== Import Hero Images
import BannerImg from "media/heroBanner.png"
//========== Import Icons
import { FaStar } from "react-icons/fa";


export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: (<> Award Winning Online Reputation Management <span className="text-primary">Services!</span> </>),
    para: (<>
      <span className="flex items-center gap-2">
        4.6/5.0
        <span className="flex gap-1 mb-1">
          <FaStar className="text-[13px] text-[#FFA909]" />
          <FaStar className="text-[13px] text-[#FFA909]" />
          <FaStar className="text-[13px] text-[#FFA909]" />
          <FaStar className="text-[13px] text-[#FFA909]" />
          <FaStar className="text-[13px] text-[#FFA909]" />
        </span>
        15+ Businesses, 35+ Happy clients.
      </span>
    </>),
    BannerImg: BannerImg,
  };
  return (
    <>
      <Hero content={heroContent} />
    </>
  );
}
