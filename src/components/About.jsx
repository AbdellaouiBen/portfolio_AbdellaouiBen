import React from 'react';
import CarteAbout from './CarteAbout';
import AboutWho from './AboutWho';
import SkillsBar from './SkillsBar';

const About = ()=> {

    return(
        <section id="about" className="container my-5"> 
            <div className="row justify-content-center">

                <CarteAbout titreAbout="TitreAbout1" iconeCarteAbout="fas fa-3x fa-compress-arrows-alt" textCarteAbout="Fast load times and lag free interaction, my highest priority."/>
                <CarteAbout titreAbout="TitreAbout2" iconeCarteAbout="fas fa-3x fa-code" textCarteAbout="My layouts will work on any device, big or small."/>
                <CarteAbout titreAbout="TitreAbout3" iconeCarteAbout="fas fa-3x fa-compress-arrows-alt" textCarteAbout="Strong preference for easy to use, intuitive UX/UI."/>
                <CarteAbout titreAbout="TitreAbout4" iconeCarteAbout="fas fa-3x fa-code" textCarteAbout="Websites don't have to be static, I love making pages come to life."/>
                
            </div>
            <div className="row my-5">
                <AboutWho />
                <SkillsBar /> 
            </div>
            
        </section> 
        
    ) 

}
export default About