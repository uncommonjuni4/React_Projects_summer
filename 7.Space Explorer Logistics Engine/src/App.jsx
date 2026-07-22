import   {LanuchAlert ,FuelEfficiency}  from './components/NavigationSystem';
import MissionControl from './components/MissionControl';
export default function StudentDashboard() {
    return (
        <>
        <MissionControl/>
        <LanuchAlert />
        <FuelEfficiency/>

        </>
    );
}