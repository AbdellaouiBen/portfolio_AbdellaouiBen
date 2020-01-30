import React, { useState,useEffect } from 'react'

import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Titre from './components/Titre.jsx'
import About from './components/About.jsx'
import Projets from './components/Projets.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'


import Loading from './components/Loading.jsx'

const App = () => {


    const [loading , setLoading] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setLoading(true)
        }, 1000);
    })
    if (loading === true) {
        return (
            <div>
            <Header />
            <div> 
                <Nav   />
                <Titre nom='ABOUT' scrolll={400} ident='about'/>
                <About />
 
                <div className="bg_projets">
                   <Titre nom='PORTFOLIO' scrolll={1300} ident='portfolio'/>
                    <Projets /> 
                </div>

                <div className="bg_Services">
                    <Titre nom='SERVICES' scrolll={1900} ident='services'/>
                    <Services bg="$bleu"/>
                </div>
  
                <div className="bg_contact">
                    <svg preserveAspectRatio="none" viewBox="0 0 100 102" height="75" width="100%" version="1.1"  className="svgcolor-light">
                        <path d="M0 0 L50 100 L100 0 Z" fill="#fff  " stroke="#fff  "></path>
                    </svg>
                    <Titre nom='CONTACT' scrolll={3700} ident='contact'/>
                    <Contact />
                </div>

                <Footer />
            </div>

            </div>
    )
    } else {  
        return (
                <Loading />
        )
    }



}
export default App