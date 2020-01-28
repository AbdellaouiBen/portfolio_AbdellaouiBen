
import React from 'react';

const SkillsBar = (props)=> {

 


    return( 
        <div id="SkillsBar" className="col-6  ">
                 
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