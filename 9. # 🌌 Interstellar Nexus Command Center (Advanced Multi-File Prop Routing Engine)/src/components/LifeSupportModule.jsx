export function LifeSupportModule({ lifeSupport }){ 
          return(
            <>
             {
                lifeSupport.oxygenLevel < 50 && <p>🚨 WARNING: Life Support Failure Imminent!.</p>
             }
             {
                lifeSupport.temperatureCelsius < 0 ? <p>Deep Freeze State</p> : lifeSupport.temperatureCelsius > 25 ? <p>Hyperthermia Alert </p> : <p>Climate Stable</p>
             }
            </>
          )
}