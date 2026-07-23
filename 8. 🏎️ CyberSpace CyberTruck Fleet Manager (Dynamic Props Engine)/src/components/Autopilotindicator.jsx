

export function AutopilotIndicator({ autopilot, target }) {
    return (
        <>
            {autopilot === true && (
                <p style={{ color: "teal", fontWeight: "bold" }}>🤖 Autopilot Engage Approved!</p>
            )}
            <p><strong>Destination:</strong> {target}</p>
        </>
    );
}