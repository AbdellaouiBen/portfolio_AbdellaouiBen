
import React,{useState,useEffect} from 'react';

const SkillsBar = (props)=> {

  const [skillsBarChange1,setSkillsBarChange1] = useState("col-6 d-none")

  useEffect(()=>{
      window.addEventListener('scroll', () => {
          if (window.scrollY > 750) {
            setSkillsBarChange1('col-6 animated fadeInRight')
          } 
          
        })  
  })
 


    return( 
        <div id="SkillsBar" className={skillsBarChange1}>
                 
            <div className="  bars-wrap" >
              <div className="bar ">
                <div className="bar fill" style={{width:"90%"}}>
                  <div className="tag "><span>CSS</span> </div>
                </div>
              <span>90%</span>
              </div>

              <div className="bar ">
                <div className="bar fill" style={{width:"90%"}}>
                  <div className="tag "><span>HTML</span></div>
                </div>
                <span>90%</span>
              </div>

              <div className="bar ">
                <div className="bar fill" style={{width:"80%"}}>
                  <div className="tag "><span>React</span></div>
                </div>
                <span>80%</span>
              </div>

              <div className="bar ">
                <div className="bar fill" style={{width:"80%"}}>
                  <div className="tag "><span>JavaScript</span></div>
                </div>
                <span>80%</span>
              </div>


              <div className="bar ">
                <div className="bar fill" style={{width:"65%"}}>
                  <div className="tag bold flex"><span>Node.js</span></div>
                </div>
                <span>65%</span>
              </div>

              <div className="bar ">
                <div className="bar fill" style={{width:"50%"}}>
                  <div className="tag "><span>UI Design</span></div>
                </div>
                <span>50%</span>
              </div>


              
            </div>

        </div>
        
    ) 

}
export default SkillsBar