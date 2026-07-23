export function EnergyGridModule({ energyGrid }){ 
    return (
        <>
        {
             energyGrid.consumption > 80 && <p> ⚠️ Critical Grid Overload Alert! Redirection Required..</p>
        }
        <p>Energy Source : {energyGrid.source}</p>
        <p>Consumption Percentage : {energyGrid.consumption}% </p>
        </>
    )
}