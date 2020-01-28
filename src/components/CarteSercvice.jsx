
import React from 'react'

const CarteSercvice = (props)=> {

    // const sous_titre2 = props.sous_titre2
    // console.log(sous_titre2);
    

    return(
        <section className="py-5  carte_service ">          
                <div className="icon_style mb-3">
                    {props.logo}
                </div>
                <div className="carte_service_nom pb-3">
                    {props.nom}
                </div>
                <div className="carte_service_petitText pb-3">
                    {props.petitText}
                </div>
                <div className="carte_service_sous_titre pb-3">
                    {props.sous_titre}
                </div>
                <div className="carte_service_sous_titre_text pb-3">
                    {props.sous_titre_text}
                </div>
                <div className="carte_service_sous_titre2 pb-3">
                    {props.sous_titre2}  
                </div>
                <div className="carte_service_sous_titre_text2"> 
                <ul>

                    {props.sous_titre_text2.map((e,index)=>
                    <li key={index}>{e}</li>
                    )}
                </ul>
                </div>


           
        </section>
        
    )

}
export default CarteSercvice