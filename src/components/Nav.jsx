import React from 'react'

const Nav =(props)=> {

    // function myFunction() {
    //     if (document.body.scrollTop > 50 ) {
    //       console.log("jknsdovnsdll");
    //     } 
    //   }
    //   myFunction()
   




    return(
       <section id="nav" className={props.navDispl}>
           <div>

                <nav className="navbar navbar-expand-lg navbar-dark ">
                        <a className="navbar-brand" href="#header">Home</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item ">
                                    <a className="nav-link" href="#about">About <span className="sr-only">(current)</span></a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#portfolio">Portfolio</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#services">Services</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                            <a href='#contact' className="navbar-text">
                                Your website is a click away.
                            </a>
                        </div>
                    </nav>
                    


           </div>

       </section>
    )

  
}

export default Nav