
export function LanuchAlert(){
    return (
        <>

        <p>"SYSTEM MESSAGE: Fleet Navigation Systems Online."</p> 
          
        </>
    )
}



export function FuelEfficiency(){

      let fuel = 30;
    return(
        <>
          {fuel >50 ? <p>Status: Fuel Efficiency Optimal ✅</p>:<p>Status: Fuel Efficiency Critical ⚠️</p>}
           
        </>
    )
}