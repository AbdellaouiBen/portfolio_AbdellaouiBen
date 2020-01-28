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
                <Titre nom='ABOUT' />
                <About />
                <div className="bg_projets">
                   <Titre nom='PROJETS' />
                    <Projets /> 
                </div>
                <div className="bg_Services">
                    <Titre nom='Services' />
                    <Services bg="$bleu"/>
                </div>
                <div className="bg_contact">
                    <Titre nom='Contact' />
                    <Contact />
                </div>
                    <Footer />

                
            </div>
            

        </div>

    )

}
export default App