export default function DialGraphic() {
  return (
    <svg
      viewBox="0 0 360 360"
      className="dial-sweep h-full w-full"
      role="img"
      aria-label="Núm vặn analog của The Dial One, các vạch chia từ 0 đến 10"
    >
      <circle cx="180" cy="180" r="172" fill="#1C1A15" stroke="#39352A" strokeWidth="1.5" />
      <circle cx="180" cy="180" r="140" fill="#1F1C16" stroke="#2A2620" strokeWidth="1" />
      {Array.from({ length: 41 }).map((_, i) => {
        const angle = -135 + (i * 270) / 40;
        const rad = (angle * Math.PI) / 180;
        const isMajor = i % 4 === 0;
        const r1 = isMajor ? 118 : 128;
        const r2 = 138;
        const x1 = 180 + r1 * Math.cos(rad);
        const y1 = 180 + r1 * Math.sin(rad);
        const x2 = 180 + r2 * Math.cos(rad);
        const y2 = 180 + r2 * Math.sin(rad);
        return (
          <line
            key={i}
            x1={x1}
            y1={y1}
            x2={x2}
            y2={y2}
            stroke={isMajor ? "#E8A33D" : "#5C5644"}
            strokeWidth={isMajor ? 2 : 1}
          />
        );
      })}
      <circle cx="180" cy="180" r="96" fill="#161410" stroke="#3A362C" strokeWidth="1" />
      <line
        x1="180"
        y1="180"
        x2="180"
        y2="96"
        stroke="#E8A33D"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <circle cx="180" cy="180" r="10" fill="#E8A33D" />
      <text
        x="180"
        y="250"
        textAnchor="middle"
        className="fill-muted"
        style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em" }}
      >
        VOL
      </text>
    </svg>
  );
}
