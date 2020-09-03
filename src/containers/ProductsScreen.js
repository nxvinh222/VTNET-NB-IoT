import React from "react"
import TopNav from "components/TopNav"
import NavBar from "components/NavBar"
import Banner from "components/Banner"
import PricingTable from "components/PricingTable"
import ProductVignettes from "components/ProductVignettes"
import IntroCards from "components/IntroCards"
import ContactBanner from "components/ContactBanner"
import TitleBanner from "components/TitleBanner"
import Footer  from "components/Footer"


function HomeScreen() {

    return(
        <div className="product-screen">
            <TopNav />
            <NavBar />
            <Banner bannerText="Take the development in-house"/>
            <PricingTable />
            <ProductVignettes />
            <IntroCards />
            <ContactBanner />
            <TitleBanner />
            <Footer />
        </div>
    )

}

export default HomeScreen