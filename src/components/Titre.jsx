import React, {useEffect,useState}  from 'react'

const Titre = (props)=> {

    const [titreChange1,setTitreChange1] = useState("titre py-5 invisible")
 
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > props.scrolll) {
                setTitreChange1('titre py-5 animated fadeInLeft')
            }
          })  
    })
 


    
    return(
        <section className={titreChange1} id={props.ident}>  
            <div className='titre_div'>
                <h1 className='titre_h1'><b>{props.nom}</b></h1>
                <hr className="hr_titre"/>
            </div>
        </section>
        
    )

}
export default Titre