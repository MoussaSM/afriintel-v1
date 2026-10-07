export default function SignalLine({ color = "#E8B34E", className = "" }) {
  return (
    <div className={`w-full h-10 overflow-hidden ${className}`}>
      <svg viewBox="0 0 1180 40" preserveAspectRatio="none" className="w-full h-full">
        <path
          d="M0,20 L500,20 L520,4 L540,36 L560,20 L1180,20"
          stroke={color}
          strokeWidth="2"
          fill="none"
          opacity="0.6"
        />
      </svg>
    </div>
  );
}
