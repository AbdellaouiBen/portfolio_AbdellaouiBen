import React, {useState, useEffect} from 'react';
// import CarteAbout from './CarteAbout';
import AboutWho from './AboutWho';
import SkillsBar from './SkillsBar';

const About = ()=> {
    const [aboutChange1,setAboutChange1] = useState("col-3 carteAbout2 ")
    const [aboutChange2,setAboutChange2] = useState("col-3 carteAbout2 ")
    const [aboutChange3,setAboutChange3] = useState("col-3 carteAbout2 ")
    const [aboutChange4,setAboutChange4] = useState("col-3 carteAbout2 ")
 
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 530) {
              setAboutChange1('col-3 carteAbout animated fadeInUp ')

              setTimeout(() => {
                setAboutChange2('col-3 carteAbout animated fadeInUp')
              }, 400);
              setTimeout(() => {
              setAboutChange3('col-3 carteAbout animated fadeInUp')
              }, 600); 
              setTimeout(() => {
              setAboutChange4('col-3 carteAbout animated fadeInUp')
              }, 800);
            }
          })  
    })
    



    return(
        <section id="about" className="container my-5 "> 
            <div className="row justify-content-center animated fadeIn">


                  <div className={aboutChange1}>
                      <div className="hex-wrap "  >
                            <div className="hexagon">
                              <i className="fas fa-3x fa-compress-arrows-alt"></i>
                            </div>
                      </div>
                      <h2 className="text-center colorAbout my-2"><b>TitreAbout1</b> </h2>
                      <p className="text-center colorAbout"> <i>Fast load times and lag free interaction, my highest priority.</i></p>
                  </div>      

                  <div className={aboutChange2}>
                      <div className="hex-wrap "  >
                            <div className="hexagon">
                              <i className="fas fa-3x fa-code"></i>
                            </div>
                      </div>
                      <h2 className="text-center colorAbout my-2"><b>TitreAbout2</b> </h2>
                      <p className="text-center colorAbout"> <i>My layouts will work on any device, big or small.</i></p>
                  </div>

                  <div className={aboutChange3}>
                      <div className="hex-wrap "  >
                            <div className="hexagon">
                              <i className="fas fa-3x fa-compress-arrows-alt"></i>
                            </div>
                      </div>
                      <h2 className="text-center colorAbout my-2"><b>TitreAbout3</b> </h2>
                      <p className="text-center colorAbout"> <i>Strong preference for easy to use, intuitive UX/UI.</i></p>
                  </div>

                  <div className={aboutChange4}>
                      <div className="hex-wrap "  >
                            <div className="hexagon">
                              <i className="fas fa-3x fa-code"></i>
                            </div>
                      </div>
                      <h2 className="text-center colorAbout my-2"><b>TitreAbout4</b> </h2>
                      <p className="text-center colorAbout"> <i>Websites don't have to be static, I love making pages come to life.</i></p>
                  </div>
                      
            </div>
            <div className="row my-5">
                <AboutWho />
                <SkillsBar /> 
            </div>
            
        </section> 
        
    ) 

}
export default About