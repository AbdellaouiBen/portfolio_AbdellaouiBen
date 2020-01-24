import React from 'react'

const Nav =()=> {

    return(
       <section id="section1">
           <div>
                


                <nav class="navbar navbar-expand-lg navbar-dark ">
                        <a class="navbar-brand" href="#header">Home</a>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarText">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item ">
                                    <a class="nav-link" href="#about">About <span class="sr-only">(current)</span></a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#portfolio">Portfolio</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#services">Services</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#contact">Contact</a>
                                </li>
                            </ul>
                            <span class="navbar-text">
                                Your website is a click away.
                            </span>
                        </div>
                    </nav>
                    


           </div>

       </section>
    )

  
}

export default Nav