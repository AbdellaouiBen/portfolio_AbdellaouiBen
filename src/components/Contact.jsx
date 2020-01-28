import React from 'react'

const Contact = (props)=> {

    
    return(
        <section className="py-5">  
            <div>
            Have a question or want to work together?

            </div>


            <form className="waypoint animated pop-in" data-animation="pop-in" data-delay=".5s" id="contact-form" >
                <input placeholder="Name" type="text" name="name" required=""/>
                <input placeholder="Enter email" type="email" name="email" required=""/>
                <textarea placeholder="Your Message" type="text" name="message" clasclassNames=""></textarea>
                <div id="success">
                <div>
                    Your message was sent successfully. Thanks!<span id="close" className="mdi mdi-close"></span>
                </div>
                </div>
                <input className="button" type="submit" id="submit" value="SUBMIT"/>
          </form>
            
        </section>
        
    )

}
export default Contact