export default function LoadingSpinner() {
  // colors & sizing
  const rectColor = "#ff0000";
  const rectSize = 10;
  const rectPadding = 2;
  const rectStep = rectSize + rectPadding;
  const iconSize = 30;
  const iconY = 55;

  // how far from the map icon to start drawing squares
  const startX = 50;

  return (
    <div className="flex justify-center items-center h-32">
      <svg
        viewBox="0 0 300 100"
        width="300"
        height="100"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Map icon */}
        <text x={10} y={iconY} fontSize={iconSize} fill="black">
          🗺️
        </text>

        {/* X icon, same exact red as rectangles */}
        <text x={260} y={iconY} fontSize={iconSize} fill={rectColor}>
          ❌
        </text>

        {/* Zig-zag rectangles */}
        {Array.from({ length: 8 }).map((_, i) => {
          const x = startX + i * rectStep;
          const y = 40 + (i % 2 === 0 ? -10 : 10);
          const delay = i * 0.1;
          return (
            <rect
              key={i}
              x={x}
              y={y}
              width={rectSize}
              height={rectSize}
              rx={2}
              ry={2}
              fill={rectColor}
              style={{
                transformOrigin: `${x + rectSize / 2}px ${y + rectSize / 2
                  }px`,
                animation: `pop 0.8s ${delay}s infinite ease-in-out`,
              }}
            />
          );
        })}

        {/* Pop animation */}
        <style>{`
          @keyframes pop {
            0% { transform: scale(0); opacity: 0; }
            50% { transform: scale(1); opacity: 1; }
            100% { transform: scale(0); opacity: 0; }
          }
        `}</style>
      </svg>
    </div>
  );
}
