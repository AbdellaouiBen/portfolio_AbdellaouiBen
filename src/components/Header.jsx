import React from 'react'

const Header =()=> {

    return(
       <header id="header">
           <div className="header_div">
                <div className='header_text'>
                    Hello, I'm <span className='header_nom'>Ben</span>. <br/>
                    I'm a full-stack web developer.   
                </div>
                <button>Hire me</button>
           </div>
       </header>
    )

  
}

export default Header