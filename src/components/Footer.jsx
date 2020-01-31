
import React, {useEffect,useState} from 'react'

const Footer = (props)=> {
    const [footerChange1,setFooterChange1] = useState("icon-wrap invisible")
    const [footerChange2,setFooterChange2] = useState("footer_div invisible")
 
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 4250) {
                setFooterChange1('icon-wrap animated fadeIn')
                setFooterChange2('footer_div animated fadeIn')
            }
          })  
    })
 
    
    return(
        <footer id="footer" className="py-5 "> 
            <div className="footer_sous_div container">
                

                <div className={footerChange1}>
                        <a target="_blank" href="https://www.linkedin.com/in/ben-abdellaoui-00a99219b/">
                            {/* <div className="" > */}
                            <i className="fab fa-2x fa-linkedin"></i>
                            {/* </div> */}
                        </a>
                        <a href="#contact">
                            {/* <div className="" > */}
                            <i className="fab fa-2x fa-facebook"></i>
                            {/* </div> */}
                        </a>
                        <a target="_blank" href="https://www.instagram.com/benabdell/">
                            {/* <div className=""> */}
                            <i className="fab fa-2x fa-instagram"></i>
                            {/* </div> */}
                        </a>
                        <a target="_blank" href="https://github.com/AbdellaouiBen">
                            {/* <div className=""> */}
                            <i className="fab fa-2x fa-github"></i>
                            {/* </div> */}
                        </a>
                </div>
            </div>


              
            <div className={footerChange2}>
                <span>ABDELLAOUI BEN <a className="copyright" href="#home"><i className="far fa-copyright"></i>2020</a>  </span>
            </div>
            
        
            
        </footer>
        
    )

}
export default Footer