import React, {useEffect,useState}  from 'react'

const Projets = (props)=> {


    const [projetsChange1,setProjetsChange1] = useState("row invisible")
    const [projetsChange2,setProjetsChange2] = useState("row invisible")
 
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 1850) {
                setProjetsChange1('row animated fadeInLeft')
            }
            if (window.scrollY > 1870) { 
                setProjetsChange2('row animated fadeInRight')
            }
          })  
    })
 


    

    // const choixProjet = ()=> {
    //     console.log("bdk");
        
    // }

      
    
    // let liste_de_projets =["ALL","Html/CSS","JAVASCIPT","REACT"]
    // const listeProjets= liste_de_projets.map((e,index)=> 
    //     <li key={index}>  
    //         <button onClick={choixProjet} >{e}</button> 
    //     </li>
    // ) 

    

    return(
        <section id="projets" className="pb-5 "> 
        <div className="container">
            {/* <div className="menu_projets d-flex justify-content-center">
                {listeProjets}
            </div> */}
            <div className='div_projets py-5'>
                <div className={projetsChange1}>
                    <div className="col-12  px-2 px-lg-0 col-lg-4 projet1 projet_carre"><div className="learnMoreL "><button>learn More</button></div></div>
                    <div className="col-12  px-2 px-lg-0 col-lg-4 projet2 projet_carre"><div className="learnMoreM "><button>learn More</button></div></div>
                    <div className="col-12  px-2 px-lg-0 col-lg-4 projet3 projet_carre"><div className="learnMoreR "><button>learn More</button></div></div> 
                </div>
                <div className={projetsChange2}>
                    <div className="col-12 px-2 px-lg-0 col-lg-4 projet4 projet_carre"><div className="learnMoreL "><button>learn More</button></div></div>
                    <div className="col-12 px-2 px-lg-0 col-lg-4 projet5 projet_carre"><div className="learnMoreM "><button>learn More</button></div></div>
                    <div className="col-12 px-2 px-lg-0 col-lg-4 projet6 projet_carre"><a href="#contact"><div className="learnMoreR "><button>learn More</button></div></a></div>
                </div>
   
            </div>

        </div>

        </section>
        
    ) 

}
export default Projets