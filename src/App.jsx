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
                <Titre nom='ABOUT' scrolll={400}/>
                <About />

                <div className="bg_projets">
                   <Titre nom='PROJETS' scrolll={1300}/>
                    <Projets /> 
                </div>

                <div className="bg_Services">
                    <Titre nom='Services' scrolll={1900}/>
                    <Services bg="$bleu"/>
                </div>

                <div className="bg_contact">
                     
                    <Titre nom='Contact' scrolll={2500}/>
                    <Contact />
                </div>

                <Footer />

                
            </div>
            

        </div>

    )

}
export default App