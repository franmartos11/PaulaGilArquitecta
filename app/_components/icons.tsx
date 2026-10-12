type IconProps = { size?: number; strokeWidth?: number };

function Icon({
  size = 22,
  strokeWidth = 1.3,
  d,
}: IconProps & { d: string }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
    >
      <path d={d} />
    </svg>
  );
}

export const ArrowRight = (p: IconProps) => <Icon {...p} d="M4 12h16M14 6l6 6-6 6" />;
export const ArrowDown = (p: IconProps) => <Icon {...p} d="M12 4v16M6 14l6 6 6-6" />;
export const MenuIcon = (p: IconProps) => <Icon {...p} d="M3 9h18M3 15h18" />;
export const CloseIcon = (p: IconProps) => <Icon {...p} d="M5 5l14 14M19 5L5 19" />;
