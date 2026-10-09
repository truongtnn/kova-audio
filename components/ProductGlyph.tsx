type GlyphType = "ring" | "cup" | "wave" | "dock" | "shield" | "case";

export default function ProductGlyph({
  type,
  className,
}: {
  type: GlyphType;
  className?: string;
}) {
  const stroke = "#E8A33D";
  const dim = "#5C5644";
  const panel = "#1C1A15";
  const line = "#39352A";

  return (
    <svg viewBox="0 0 200 200" className={className} role="img" aria-hidden="true">
      <rect x="1" y="1" width="198" height="198" fill={panel} stroke={line} />
      {type === "ring" && (
        <>
          <circle cx="100" cy="100" r="60" fill="none" stroke={line} strokeWidth="2" />
          <circle cx="100" cy="100" r="40" fill="none" stroke={dim} strokeWidth="1.5" />
          <line x1="100" y1="100" x2="100" y2="60" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
          <circle cx="100" cy="100" r="5" fill={stroke} />
        </>
      )}
      {type === "case" && (
        <>
          <circle cx="100" cy="100" r="46" fill="none" stroke={line} strokeWidth="2" />
          <circle cx="100" cy="100" r="30" fill="none" stroke={dim} strokeWidth="1.5" />
          <line x1="100" y1="100" x2="100" y2="74" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
          <circle cx="100" cy="100" r="4" fill={stroke} />
        </>
      )}
      {type === "cup" && (
        <>
          <path d="M60 130 a40 40 0 0 1 80 0" fill="none" stroke={line} strokeWidth="3" />
          <rect x="52" y="122" width="16" height="30" rx="4" fill="none" stroke={dim} strokeWidth="2" />
          <rect x="132" y="122" width="16" height="30" rx="4" fill="none" stroke={dim} strokeWidth="2" />
          <circle cx="140" cy="118" r="9" fill="none" stroke={stroke} strokeWidth="2.5" />
          <line x1="140" y1="118" x2="140" y2="111" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </>
      )}
      {type === "wave" && (
        <>
          <rect x="70" y="60" width="60" height="80" rx="6" fill="none" stroke={line} strokeWidth="2.5" />
          {[0, 1, 2].map((i) => (
            <path
              key={i}
              d={`M ${85 + i * 12} 130 v -${20 + i * 14}`}
              stroke={i === 1 ? stroke : dim}
              strokeWidth="4"
              strokeLinecap="round"
            />
          ))}
        </>
      )}
      {type === "dock" && (
        <>
          <rect x="60" y="120" width="80" height="14" rx="3" fill="none" stroke={line} strokeWidth="2.5" />
          <circle cx="100" cy="90" r="30" fill="none" stroke={dim} strokeWidth="2" />
          <line x1="100" y1="90" x2="100" y2="68" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
      {type === "shield" && (
        <>
          <rect x="65" y="70" width="70" height="60" rx="10" fill="none" stroke={line} strokeWidth="2.5" />
          <circle cx="100" cy="100" r="16" fill="none" stroke={dim} strokeWidth="2" />
          <line x1="100" y1="100" x2="100" y2="88" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}
