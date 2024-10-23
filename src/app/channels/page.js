//=============== Import Components
import { Hero, Channels } from "@/components";
//========== Import Icons
import { FaStar } from "react-icons/fa";
//========== Import Images
import BannerImg from "media/home/heroBanner.png"
//========== 
import cardBg from "media/cardBg.png"
import cardBgHvr from "media/cardBgHvr.png"

export default function Home() {
  //=============== Hero ===============
  const heroContent = {
    title: (<> Award Winning Online Reputation Management <span className="text-primary">Services!</span> </>),
    para: (<>
      <span className="flex flex-wrap md:flex-nowrap justify-center md:justify-start items-center gap-2">
        Rated 4.6/5.0
        <span className="flex gap-1 mb-1">
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
          <FaStar className="text-[15px] md:text-[13px] text-[#FFA909]" />
        </span>
        <span className="hidden md:block">|</span> Trusted by 15+ Businesses <span className="hidden md:block">|</span> <br className="block md:hidden" /> 135+ happy clients
      </span>
    </>),
    cta1Txt: "Explore The Platform",
    cta2Txt: "Watch Demo",
    BannerImg: BannerImg,
  };
  //=============== Releases ===============
  const channelsContent = {
    title: (<> News / Article Publication <span className="text-primary">Services</span> </>),
    para: "Top businesses are winning because they have a single source of truth for their reputation performance. They always know what consumers are saying",
    cardBg: cardBg,
    cardBgHvr: cardBgHvr,
  };
  return (
    <>
      <Hero content={heroContent} />
      <Channels content={channelsContent} />
    </>
  );
}
