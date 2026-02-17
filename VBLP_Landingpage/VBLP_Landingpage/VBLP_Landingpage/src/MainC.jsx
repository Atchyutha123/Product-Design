import React from 'react'
import HeroStackedImages from './HeroStackedImages';
import AboutStudio from './AboutStudio';
import ResonanceStudio from './ResonanceStudio'
import Contact from './ContactPart1'
import PortfolioSection from './Portfoliosection';
import Testimonial from './TestimonialCarousel';
import Serivces from './ServicesLanding'
import Hexa from './HexaSection'
import Faqs from './Faqs';
import ExitIntentPopup from './ExitIntentPopup';

function MainC() {
  return (
    <>
    <section id="hero">
        <HeroStackedImages />
    </section>
    <section id="about">
        <AboutStudio/>
    </section>
    <section id="benifits">
        <Hexa/>
    </section>
    <section id="services">
        <Serivces/>
        {/* <ResonanceStudio/> */}
    </section>
    <section id="projects">
        <PortfolioSection/>
        <Testimonial/>
        <Faqs/>
    </section>
    
    <section id="contact">
        <Contact/>
    </section>

    
    
    {/* <ExitIntentPopup /> */}
    
    </>
  )
}

export default MainC