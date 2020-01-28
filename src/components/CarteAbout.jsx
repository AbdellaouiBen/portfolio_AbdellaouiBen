import React from 'react'

const CarteAbout = (props)=> {
    return(
        <section id="CarteAbout" className="col-3 ">
    
             <div className="hex-wrap "  >
                  <div className="hexagon">
                    <i className={props.iconeCarteAbout}></i>
                  </div>
            </div>
            <h2 className="text-center colorAbout my-2"><b>{props.titreAbout}</b> </h2>
            <p className="text-center colorAbout"> <i>{props.textCarteAbout}</i></p>
            


 


        </section>
        
    )

}
export default CarteAbout     