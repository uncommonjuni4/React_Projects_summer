

export function StatusCard({ battery }) {
    return (
        <>
            {battery > 50 ? (
                <p style={{ color: "green" }}>Status: Energy Optimal ⚡</p>
            ) : (
                <p style={{ color: "red", fontWeight: "bold" }}>Status: Low Energy Crisis 🪫</p>
            )}
        </>
    );
}