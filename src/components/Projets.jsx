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
                <div className="row">
                    <div className="col-4 projet1 projet_carre">sdczec</div>
                    <div className="col-4 projet2 projet_carre"></div>
                    <div className="col-4 projet3 projet_carre"></div> 
                </div>
                <div className="row">
                    <div className="col-4 projet4 projet_carre"></div>
                    <div className="col-4 projet5 projet_carre"></div>
                    <div className="col-4 projet6 projet_carre"></div>
                </div>

            </div>

        </div>

        </section>
        
    ) 

}
export default Projets