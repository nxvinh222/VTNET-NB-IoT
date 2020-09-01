import React from "react"
import TopNav from "components/TopNav"
import NavBar from "components/NavBar"
import Banner from "components/Banner"
import Carousel  from "components/Carousel"
import SecondBanner from "components/SecondBanner"
import IntroVideo from "components/IntroVideo"
import Navigation from "components/Navigation"
import IntroCards from "components/IntroCards"
import ContactBanner from "components/ContactBanner"
import TitleBanner from "components/TitleBanner"
import Footer  from "components/Footer"


function HomeScreen() {

    return(
        <div className="home-screen">
            <TopNav />
            <NavBar />
            <Banner bannerText="IoT | Internet of Things"/>
            <Carousel />
            <SecondBanner />
            <IntroVideo />
            <Navigation />
            <IntroCards />
            <ContactBanner />
            <TitleBanner />
            <Footer />
        </div>
    )

}

export default HomeScreen