interface Props {
  value: number;
  size?: "sm" | "md" | "lg";
  showValue?: boolean;
  label?: string;
}

export default function Stars({ value, size = "md", showValue = true, label }: Props) {
  const px = size === "sm" ? "text-sm" : size === "lg" ? "text-2xl" : "text-lg";
  const pct = Math.max(0, Math.min(100, (value / 5) * 100));
  return (
    <span className="inline-flex items-center gap-1.5" aria-label={`${value.toFixed(1)} de 5`}>
      <span className={`relative inline-block leading-none ${px}`}>
        <span className="text-slate-300">★★★★★</span>
        <span className="absolute inset-0 overflow-hidden text-amber-400" style={{ width: `${pct}%` }}>
          ★★★★★
        </span>
      </span>
      {showValue && <span className="text-sm font-bold text-slate-800">{value.toFixed(1)}</span>}
      {label && <span className="text-xs text-slate-500">{label}</span>}
    </span>
  );
}
