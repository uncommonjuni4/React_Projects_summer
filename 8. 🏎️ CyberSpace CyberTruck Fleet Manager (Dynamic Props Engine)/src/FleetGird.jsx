
import { StatusCard } from './components/StatusCard';
import { AutopilotIndicator } from './components/Autopilotindicator';

function FleetGrid({ Data }) {
    return (
        <ul>
            {Data.map((vehicle) => {
                return (
                    <li key={vehicle.id} style={{ marginBottom: "25px", borderBottom: "1px solid #ccc", paddingBottom: "15px", listStyleType: "none" }}>
                        <h3>🚚 Model: {vehicle.model}</h3>
                        <p><strong>Driver:</strong> {vehicle.driver}</p>
                        <p><strong>Current Load:</strong> {vehicle.currentLoad} kg</p>
                        <p><strong>Battery:</strong> {vehicle.batteryPercentage}%</p>

                        {/* 1. Dynamic Prop Ingestion for StatusCard */}
                        <StatusCard battery={vehicle.batteryPercentage} />

                        {/* 2. 3-Tier Nested Ternary Load Filter */}
                        {vehicle.currentLoad > 8000 ? (
                            <p style={{ color: "purple", fontWeight: "bold" }}>[MAX LOAD CAP] Heavy Transport</p>
                        ) : vehicle.currentLoad >= 4000 ? (
                            <p style={{ color: "blue" }}>[MID LOAD CAP] Standard Transport</p>
                        ) : (
                            <p style={{ color: "green" }}>[LIGHT LOAD CAP] Recon Unit</p>
                        )}

                        {/* 3. Dynamic Prop Ingestion for Autopilot & Destination */}
                        <AutopilotIndicator autopilot={vehicle.autopilotReady} target={vehicle.destination} />
                    </li>
                );
            })}
        </ul>
    );
}

// Default Export alignment
export default FleetGrid;