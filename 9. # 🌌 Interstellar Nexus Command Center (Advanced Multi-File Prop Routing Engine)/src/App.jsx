import React from 'react';
import SectorCard from "./components/SectorCard";
import StationData from './api/stationData.json';

function App() {
    return (
        <div style={{ padding: "20px", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
            <h1 style={{ color: "#0f172a", textAlign: "center" }}>🌌 Interstellar Nexus Command Center</h1>
            <p style={{ textAlign: "center", color: "#64748b" }}>System Synchronization: Online | Multi-Layer Prop Routing Active</p>
            
            {/* Kept <ul> outside the loop to maintain solid semantic integrity */}
            <ul style={{ padding: 0 }}>
                {StationData.map((dataItem) => {
                    return <SectorCard key={dataItem.sectorId} Data={dataItem} />;
                })}
            </ul>
        </div>
    );
}

export default App;