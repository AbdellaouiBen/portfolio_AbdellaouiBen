import React from 'react'
// , { useState }
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import Titre from './components/Titre.jsx'
import About from './components/About.jsx'
import Projets from './components/Projets.jsx'
import Services from './components/Services.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {


 
    // const [navDispl, setNavDispl] = useState('navNormale')
    // const descend = (e) => {
    //     console.log(window.scrollY);

    //     window.scrollY > 500 ? setNavDispl('navFixed') : setNavDispl('navNormale')
    // }
    // window.onscroll = descend;


// navDispl={navDispl}

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
                     
                    <Titre nom='CONTACT' scrolll={3700} ident='contact'/>
                    <Contact />
                </div>

                <Footer />

                
            </div>
            

        </div>

    )

}
export default App