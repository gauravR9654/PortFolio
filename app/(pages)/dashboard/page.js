'use client'
import StickyNavbar from "@/app/_component/stickyNavbar"
import Slider from "@/app/_component/slider"
import sliderData from "../../utils/sliderData.json"
import cards from "../../utils/Cards.json"
import Content from "@/app/_component/content"
import Intro from "@/app/_component/Intro"
import Experience from "@/app/_component/Experience"
import Footer from "@/app/_component/Footer"
const dashboard = () => {
    return (
        <>
            {/* <div className="bg-white"> */}
                {/* NAVBAR */}
                <StickyNavbar />
                {/* SLIDEER */}
                <Slider data={sliderData} />
                {/*CONTENT DATA  */}
                <Content data={cards} />
                {/* Intro */}
                <Infootro />
                {/* Experince */}
                <Experience />
                {/* Footer */}
                <Footer />

            {/* </div> */}
        </>
    )

}

export default dashboard