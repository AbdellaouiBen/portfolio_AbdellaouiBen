import React, {useState,useEffect} from 'react'

const AboutWho = (props) => {

    const [aboutWhoChange1,setAboutChange1] = useState("hexagon2 d-none")
    const [aboutWhoChange2,setAboutChange2] = useState(" text-center pt-3 d-none")
  
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 750) {
                setAboutChange1('hexagon2 animated fadeInLeft')
            }
            if (window.scrollY > 920) {
                setAboutChange2('text-center pt-3 animated fadeInUp')
            }
          })  
    })     


    // col-lg-3 col-md-6 col-sm-12
    return (
            <div id="aboutWho" className=" col-xl-6 col-sm-12  mb-5"> 
            <div className="aboutWho_center_img">
                <div className={aboutWhoChange1}> 
                        <div className="hexTop"></div>
                        <div className="hexBottom"></div>
                    </div>
            </div>
                    
                
                <div className={aboutWhoChange2}>
                    <h2>Who's this guy?</h2>
                    <p className="pAboutWho">I'm a Full stack web Developer for <a href="#about">ChowNow</a>  in Brussels, BELGIUM. <br />
                        I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. <br />
                        <a href="#contact">Let's make something special.</a> </p>
                </div>
            </div>
            



    )

}
export default AboutWho     