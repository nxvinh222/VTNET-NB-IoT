import React from "react"
import TopNav from "../components/TopNav"
import NavBar from "../components/NavBar"
import ProductDetail from "../components/ProductDetail"
import ContactBanner from "../components/ContactBanner"
import TitleBanner from "../components/TitleBanner"
import Footer  from "../components/Footer"


function HomeScreen() {

    return(
        <div className="product-detail-screen">
            <TopNav />
            <NavBar />
            <ProductDetail />
            <ContactBanner />
            <TitleBanner />
            <Footer />
        </div>
    )

}

export default HomeScreen