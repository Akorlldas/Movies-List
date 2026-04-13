function IconBase({
  children,
  size = 20,
  color = "currentColor",
  strokeWidth = 2,
  className = "",
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      {children}
    </svg>
  );
}

export function MovieIcon(props) {
  return (
    <IconBase {...props}>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <line x1="7" y1="5" x2="7" y2="19" />
      <line x1="17" y1="5" x2="17" y2="19" />
      <circle cx="5" cy="8" r="0.5" />
      <circle cx="5" cy="12" r="0.5" />
      <circle cx="5" cy="16" r="0.5" />
      <circle cx="19" cy="8" r="0.5" />
      <circle cx="19" cy="12" r="0.5" />
      <circle cx="19" cy="16" r="0.5" />
    </IconBase>
  );
}

export function StarIcon(props) {
  return (
    <IconBase {...props}>
      <polygon points="12 3 15 10 22 10 17 14 19 21 12 17 5 21 7 14 2 10 9 10" />
    </IconBase>
  );
}

export function SparkleStarIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M12 3v4" />
      <path d="M12 17v4" />
      <path d="M3 12h4" />
      <path d="M17 12h4" />
      <path d="M5 5l3 3" />
      <path d="M16 16l3 3" />
      <path d="M5 19l3-3" />
      <path d="M16 8l3-3" />
    </IconBase>
  );
}

export function HourglassIcon(props) {
  return (
    <IconBase {...props}>
      <path d="M6 2h12" />
      <path d="M6 22h12" />
      <path d="M6 2c0 6 6 6 6 10s-6 4-6 10" />
      <path d="M18 2c0 6-6 6-6 10s6 4 6 10" />
    </IconBase>
  );
}

export function CalendarIcon(props) {
  return (
    <IconBase {...props}>
      {/* 外框 */}
      <rect x="3" y="4" width="18" height="18" rx="2" />

      {/* 顶部分隔线 */}
      <line x1="3" y1="10" x2="21" y2="10" />

      {/* 装订点 */}
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="16" y1="2" x2="16" y2="6" />
    </IconBase>
  );
}

export function BackIcon(props) {
  return (
    <IconBase {...props}>
      {/* 箭头主线 */}
      <path d="M19 12H5" />

      {/* 箭头头部 */}
      <path d="M12 19l-7-7 7-7" />
    </IconBase>
  );
}
