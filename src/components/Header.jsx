import React from 'react'
import logoSite from '../images/logoSite.png'

const Header =()=> {
 
    return(
       <header id="header">
           <div className="header_div">
               <div className="header_img">
                    <img src={logoSite} alt="logo"/>
               </div>

                <div className='header_text '>
                    <div className="ecrire">Hello, I'm <span className='header_nom d-inline'>Ben</span>.  I'm a full-stack web developer. </div>   
                </div> 

                {/* <a href="#contact" className="header_button"><button  className="header_button_btn" >Hire me</button></a> */}
                <a href="#contact " className="header_button">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Hire me
                </a>
                
                <a href="#about" className="header_button2"> <button> <i className="fas fa-chevron-down"></i></button></a>
            </div>
       </header>
    )

   
}

export default Header