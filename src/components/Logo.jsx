export default function Logo({ light = false }) {
  const fill = light ? "#FFFFFF" : "#0B3D5C"
  const accent = "#E8772E"
  return (
    <svg width="170" height="44" viewBox="0 0 180 44" fill="none" aria-label="EQUIPE 360" role="img">
      <path d="M22 4C12.059 4 4 12.059 4 22s8.059 18 18 18 18-8.059 18-18" stroke={accent} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      <path d="M38 4L40 10.5L33.5 9" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
      <circle cx="16" cy="19" r="2.5" fill={fill} />
      <circle cx="22" cy="16" r="2.5" fill={fill} />
      <circle cx="28" cy="19" r="2.5" fill={fill} />
      <path d="M12 28c0-3 2-5 4-5h0c1.5 0 2.8.7 3.5 1.8" stroke={fill} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M18 26c0-3 2-5 4-5s4 2 4 5" stroke={fill} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <path d="M26.5 24.8c.7-1.1 2-1.8 3.5-1.8h0c2 0 4 2 4 5" stroke={fill} strokeWidth="1.5" strokeLinecap="round" fill="none" />
      <text x="50" y="20" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="16" fill={fill} letterSpacing="1">EQUIPE</text>
      <text x="50" y="38" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="18" fill={accent} letterSpacing="2">360</text>
    </svg>
  )
}
