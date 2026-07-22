import ShipData from '../api/ships.json';



function MissionControl() {
    return (
        <>
            <ul>
                {ShipData.map((ShipData) => {

                    return <li key={ShipData.id}>
                        <p>CargoShip Id  : {ShipData.id}</p>
                        <p>Ship Name : {ShipData.shipName} </p>
                        <p>Destination  : {ShipData.destination} </p>
                        <p>CargoWeight  : {ShipData.cargoWeight} </p> 
                        <p>Fuel : {ShipData.fuelLevel}</p>
                       {ShipData.cargoWeight > 8000 ? <p  style={{ color: "red", fontWeight: "bold" }}>Heavy Cruiser Layer</p> : ShipData.cargoWeight >= 4000 ?<p style={{ color: "green" }}>Medium Cargo Layer</p> : <p>Scout Fighter Layer</p>}
                       {ShipData.fuelLevel <=40 ? <p>🚨 DANGER: Emergency Refueling Required Immediately!"</p>  : <p>Normal Fuel Level</p>}
                       {ShipData.hyperdriveReady === true &&  <p>⚡ Hyperdrive Active & Ready for Jump!</p>}
                    </li>

                })}

            </ul>
        </>
    )
}




export default MissionControl;