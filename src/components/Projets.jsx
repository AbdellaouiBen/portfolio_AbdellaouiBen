import React from 'react'

const Projets = (props)=> {
  
    const choixProjet = ()=> {
        console.log("bdk");
         
    }
    
      
    let liste_de_projets =["ALL","Html/CSS","JAVASCIPT","REACT"]
    const listeProjets= liste_de_projets.map((e,index)=> 
        <li key={index}>  
            <button onClick={choixProjet} >{e}</button> 
        </li> 
         
    )

    

    return(
        <section id="projets" className=" "> 
        <div className="container">
            <div className="menu_projets d-flex justify-content-center">
                {listeProjets}
            </div>
            <div className='div_projets'>

            </div>

        </div>

        </section>
        
    ) 

}
export default Projets