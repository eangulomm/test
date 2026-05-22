import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value:     number; // 0–100
  className?: string;
  showLabel?: boolean;
}

/**
 * ProgressBar
 * Quiz progress tracker with glowing gradient fill.
 * Pass `value` as a percentage (0–100).
 */
export function ProgressBar({ value, className, showLabel = false }: ProgressBarProps) {
  const clamped = Math.min(100, Math.max(0, value));

  return (
    <div className={cn("w-full", className)} role="progressbar" aria-valuenow={clamped} aria-valuemin={0} aria-valuemax={100}>
      {showLabel && (
        <div className="flex justify-between text-white/40 text-xs mb-1.5 font-mono">
          <span>Progreso</span>
          <span>{Math.round(clamped)}%</span>
        </div>
      )}
      <div className="progress-track">
        <div
          className="progress-fill"
          style={{ width: `${clamped}%` }}
        />
      </div>
    </div>
  );
}
