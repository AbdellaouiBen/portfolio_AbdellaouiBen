import React from 'react'
import CarteSercvice from './CarteSercvice'

const Services = (props)=> {

    return(
        <section id="services" className="py-5  ">  
        <div className="services container">
                    <div className="service_what">
                        What I can do for YOU ?
                    </div> 

    

                    <div id="carouselExampleIndicators"  className="carousel slide" data-ride="carousel">
                        <ol className="carousel-indicators">
                            <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                        </ol>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="">
                                        <CarteSercvice logo={<i 
                                            className='fas fa-2x fa-mobile-alt'></i>} 
                                            nom="Front-end Developer" 
                                            petitText="I like to code things from scratch, and enjoy bringing ideas to life in the browser." 
                                            sous_titre="Languages I speak:" 
                                            sous_titre_text="HTML, Pug, Slim, CSS, Sass, Less"
                                            sous_titre2="Dev Tools:" 
                                            sous_titre_text2={["Atom",
                                            "Bitbucket",
                                            "Bootstrap",
                                            "Bulma",
                                            "Codekit",
                                            "Codepen",
                                            "Github",
                                            "Gitlab",
                                            "Terminal"]}/>
                                </div>
                            </div>

                            <div className="carousel-item">
                                <div className="">
                                    <CarteSercvice 
                                        logo={<i className='fas fa-2x fa-mobile-alt'></i>} 
                                        nom="Back-end Developer"  
                                        petitText="bonjour bonjour bonjour a tous"
                                        sous_titre="Languages I speak:" 
                                        sous_titre_text="HTML, Pug, Slim, CSS, Sass, Less"
                                        sous_titre2="Dev Tools:" 
                                            sous_titre_text2={["Atom",
                                            "Bitbucket",
                                            "Bootstrap",
                                            "Bulma",
                                            "Codekit",
                                            "Codepen",
                                            "Github",
                                            "Gitlab",
                                            "Terminal"]}/>
        
                                </div>
                            </div>

                            <div className="carousel-item">  
                                <div className="">
                                    <CarteSercvice 
                                        logo={<i className='fas fa-2x fa-mobile-alt'></i>} 
                                        nom="Designer" 
                                        petitText="I value simple content structure, clean design patterns, and thoughtful interactions."
                                        sous_titre="Things I enjoy designing:" 
                                        sous_titre_text="UX, UI, Web, Mobile, Apps, Logos"
                                        sous_titre2="Design Tools:" 
                                        sous_titre_text2={["Balsamiq Mockups",
                                        "Figma",
                                        "Invision",
                                        "Marvel",
                                        "Pen & Paper",
                                        "Sketch",
                                        "Webflow",
                                        "Zeplin",]}/>
                                </div>
                            </div> 
                        </div>
                        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="sr-only">Previous</span>
                        </a>
                        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="sr-only">Next</span>
                        </a>
                    </div>
        </div>
                



                            











           
        </section>
        
    )

}
export default Services