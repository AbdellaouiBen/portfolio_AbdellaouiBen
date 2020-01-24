import React, { useState } from 'react'
import Header from './components/Header.jsx'
import Nav from './components/Nav.jsx'
import About from './components/About.jsx'
import Titre from './components/Titre.jsx'

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
                <About />
                <Titre nom='About' />
            </div>
            

        </div>

    )

}
export default App