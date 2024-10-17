import dynamic from "next/dynamic"

const AutoPlaySlider = dynamic(() => import('./slider/AutoPlaySlider'))
const AutoScrollSlider = dynamic(() => import('./slider/AutoScrollSlider'))
const Header = dynamic(() => import('./header/Header'))
const CTA = dynamic(() => import('./cta/CTA'))
const Hero = dynamic(() => import('./hero/Hero'))
const What = dynamic(() => import('./what/What'))
const Podcast = dynamic(() => import('./podcast/Podcast'))
const Publication = dynamic(() => import('./publication/Publication'))
const Live = dynamic(() => import('./live/Live'))
const Choose = dynamic(() => import('./choose/Choose'))
const Benefits = dynamic(() => import('./benefits/Benefits'))
const Interviews = dynamic(() => import('./interviews/Interviews'))
const BuyReviews = dynamic(() => import('./buyreviews/BuyReviews'))
const Billboard = dynamic(() => import('./billboard/Billboard'))
const CaseStudy = dynamic(() => import('./casestudy/CaseStudy'))
const Working = dynamic(() => import('./working/Working'))
const Expert = dynamic(() => import('./expert/Expert'))
const OurClients = dynamic(() => import('./ourclients/OurClients'))
const Footer = dynamic(() => import('./footer/Footer'))
const Press = dynamic(() => import('./press/Press'))
const Releases = dynamic(() => import('./releases/Releases'))
const AudioPress = dynamic(() => import('./audiopress/AudioPress'))
const OurAudios = dynamic(() => import('./ouraudios/OurAudios'))
const Cross = dynamic(() => import('./cross/Cross'))
const Trust = dynamic(() => import('./trust/Trust'))
const Wikitia = dynamic(() => import('./wikitia/Wikitia'))
const Possibilities = dynamic(() => import('./possibilities/Possibilities'))
const Solutions = dynamic(() => import('./solutions/Solutions'))
const Advertising = dynamic(() => import('./advertising/Advertising'))
const OurReview = dynamic(() => import('./ourreview/OurReview'))
const TvInterview = dynamic(() => import('./tvinterview/TvInterview'))
const Trends = dynamic(() => import('./trends/Trends'))


export {
    AutoPlaySlider,
    AutoScrollSlider,
    CTA,
    Header,
    Hero,
    What,
    Podcast,
    Publication,
    Live,
    Choose,
    Benefits,
    Interviews,
    BuyReviews,
    Billboard,
    CaseStudy,
    Working,
    Expert,
    OurClients,
    Footer,
    Press,
    Releases,
    AudioPress,
    OurAudios,
    Cross,
    Trust,
    Wikitia,
    Possibilities,
    Solutions,
    Advertising,
    OurReview,
    TvInterview,
    Trends,
}