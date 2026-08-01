import { useState } from 'react'
import './ToggleSwitch.css'


export function ToggleSwitch(){




    const handleSwitch=()=>{
         setIsOn(!isOn)
    }
    const [isOn ,setIsOn]   = useState(false)


        const toglesclass= isOn ?"on" : "off" ;
       return (
        <>
           
           <div className={`Toggle  ${toglesclass}`}  onClick={handleSwitch}>
               <div  className={`toogleSwitch  ${toglesclass}`}>
                 <span  className="span">{toglesclass}</span>
               </div>
            </div>
        
        </>
       )
}