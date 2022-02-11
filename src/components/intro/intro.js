import React from 'react'
import './intro.css';
import me from '../../img/me.png'

const Intro = () => {
  return (
      // Intro div
    <div className = "i">
        <div className = "i-left">
            <div className = "i-left-wrapper">
                <h2 className = "i-intro"> Hello, My name is</h2>
                <h2 className = "i-name"> Sama Mansour </h2>
                <div className = "i-title"> 
                <div className = "i-title-wrapper">
                    <div className = "i-title-item">Fresh Graduate</div>
                   
                </div>

                
                </div>
                
                 <div > Looking for an entry level job as a full stack developer</div>
            </div>
        </div>
        <div className = "i-right">
            <div className = "i-bg"></div>
            <img src= {me} alt="me" className="i-img"/>
        </div>
    </div>
  )
}

export default Intro     