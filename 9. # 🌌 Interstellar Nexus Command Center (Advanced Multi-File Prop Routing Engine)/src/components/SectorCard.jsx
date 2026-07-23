import { EnergyGridModule } from './EnergyGridModule';
import { FleetManifest } from './FleetManifest';
import { LifeSupportModule } from './LifeSupportModule';

function SectorCard({ Data }){ // <-- Added curly braces here
    return(
        <>
           <li key={Data.sectorId}> {/* Fix: Capital I in sectorId */}
            <h3>🛸 Sector Name: {Data.sectorName}</h3>
            
            {/* Fix: Right data to the right props */}
            <EnergyGridModule energyGrid={Data.energyGrid} />
            <LifeSupportModule lifeSupport={Data.lifeSupport} />
            <FleetManifest dockedFleets={Data.dockedFleets} />
         </li>
        </>
    )
}

export default SectorCard;