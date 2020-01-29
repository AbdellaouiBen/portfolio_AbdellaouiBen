import React, {useState,useEffect}  from 'react'

const Contact = (props)=> {


    const [contactChange1,setContactChange1] = useState("contact_text pb-5 invisible")
    const [contactChange2,setContactChange2] = useState("row no-gutters invisible")
 
    useEffect(()=>{
        window.addEventListener('scroll', () => {
            if (window.scrollY > 3700) {
                setContactChange1('contact_text pb-5 animated fadeInRight')
            }
            if (window.scrollY > 3750) {
                setContactChange2('row no-gutters animated fadeInLeft')
            }
          })  
    })




    
    return(
        <section className="pb-5">  
            <div className={contactChange1}>
                Have a question or want to work together?
            </div>


            <div className={contactChange2}>
                <form className="col-4 ofset-4 no-gutters"   id="contact-form" >
                    <input placeholder="Name" type="text" name="name" required=""/>
                    <input placeholder="Enter email" type="email" name="email" required=""/>
                    <textarea placeholder="Your Message" type="text" name="message" className=""></textarea>
                    
                    <input type="submit" id="submit" value="SUBMIT"/>
                </form>
            </div>
         
        </section>    
        
    ) 

}
export default Contact 

