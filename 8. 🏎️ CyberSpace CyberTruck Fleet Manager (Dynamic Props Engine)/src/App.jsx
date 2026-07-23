import FleetGird from "./FleetGird";
import FleetData  from './api/Fleet.json' 

function  App(){
    return(
        <>
           <p>fleet dynamic metadata message</p>
            <FleetGird Data = {FleetData} />
        </>
    )
}


export default App;