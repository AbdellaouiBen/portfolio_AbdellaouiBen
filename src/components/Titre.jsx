import React from 'react'

const Titre = (props)=> {

    
    return(
        <section className="titre py-5">  
            <div className='titre_div'>
                <h1 className='titre_h1'><b>{props.nom}</b></h1>
                <hr className="hr_titre"/>
            </div>
        </section>
        
    )

}
export default Titre