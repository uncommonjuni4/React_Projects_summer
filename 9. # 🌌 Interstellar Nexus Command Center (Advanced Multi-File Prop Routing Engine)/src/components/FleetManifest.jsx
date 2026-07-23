export  function FleetManifest({dockedFleets}){
    return(
        <>
         {
            dockedFleets.length ==  0 ? <p>🚫 No ships currently docked in this terminal.. </p>: dockedFleets.map((ship , index)=>{
               return <span  key={index}>{ship}</span>
            })
         }
        
        </>
    )
}