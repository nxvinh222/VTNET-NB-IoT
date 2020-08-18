import React from "react"
import NavBar from "../components/NavBar"
import Banner from "../components/Banner"
import Navigation from "../components/Navigation"
import IntroVideo from "../components/IntroVideo"
import Carousel  from "../components/Carousel"
import Footer  from "../components/Footer"
import IntroCards from "../components/IntroCards"

function HomeScreen() {

    return(
        <div>
            <NavBar />
            <Banner />
            {/* <Carousel /> */}
            <IntroVideo />
            <Navigation />
            <IntroCards />
            <Footer />
        </div>
    )

}

export default HomeScreen