import React from "react"
import TopNav from "../components/TopNav"
import NavBar from "../components/NavBar"
import Banner from "../components/Banner"
import Carousel  from "../components/Carousel"
import SecondBanner from "../components/SecondBanner"
import IntroVideo from "../components/IntroVideo"
import Navigation from "../components/Navigation"
import IntroCards from "../components/IntroCards"
import ContactBanner from "../components/ContactBanner"
import TitleBanner from "../components/TitleBanner"
import Footer  from "../components/Footer"
import PricingTable from "../components/PricingTable"

function HomeScreen() {

    return(
        <div>
            <TopNav />
            <NavBar />
            <Banner bannerText="Take the development in-house"/>
            <PricingTable />
            <IntroCards />
            <ContactBanner />
            <TitleBanner />
            <Footer />
        </div>
    )

}

export default HomeScreen