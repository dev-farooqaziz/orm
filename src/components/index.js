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
const Wikipedia = dynamic(() => import('./wikipedia/Wikipedia'))
const Possibilities = dynamic(() => import('./possibilities/Possibilities'))
const Solutions = dynamic(() => import('./solutions/Solutions'))
const Advertising = dynamic(() => import('./advertising/Advertising'))
const OurReview = dynamic(() => import('./ourreview/OurReview'))
const TvInterview = dynamic(() => import('./tvinterview/TvInterview'))
const Trends = dynamic(() => import('./trends/Trends'))
const Channels = dynamic(() => import('./channels/Channels'))
const ContactForm = dynamic(() => import('./contactForm/contactForm'))
const Aboutus = dynamic(() => import('./aboutus/aboutus'))
const Whatbelieve = dynamic(() => import('./whatbelieve/whatbelieve'))
const NewcaseStudy = dynamic(() => import('./newcaseStudy/newcaseStudy'))
const Aboutorm = dynamic(() => import('./aboutorm/aboutorm'))
const Challanges = dynamic(() => import('./challanges/challanges'))
const Platforms = dynamic(() => import('./platforms/platforms'))

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
    Wikipedia,
    Possibilities,
    Solutions,
    Advertising,
    OurReview,
    TvInterview,
    Trends,
    Channels,
    ContactForm,
    Aboutus,
    Whatbelieve,
    NewcaseStudy,
    Aboutorm,
    Challanges,
    Platforms
}