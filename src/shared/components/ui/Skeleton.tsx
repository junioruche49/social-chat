/**
 * Skeleton placeholder. Use whenever a list/card is loading and the
 * dimensions are known. NEVER show zeroed values during loading — show
 * a Skeleton instead. This is a hard rule from the web monorepo
 * (CLAUDE.md → metric-card-loading); same applies on mobile.
 *
 * Compose by placing multiple Skeletons in the same layout the real
 * content will use, so there's no layout shift on load.
 */
interface SkeletonProps {
	/** Height in px. Default 16 (line height). */
	height?: number;
	/** Width — number (px) or string ('100%', '60%'). Default '100%'. */
	width?: number | `${number}%` | "auto";
	/** Tailwind classes for additional layout (margins, etc). */
	className?: string;
}

export function Skeleton({
	height = 16,
	width = "100%",
	className,
}: SkeletonProps) {
	// Width/height are per-instance dynamic values. Color/spacing tokens
	// still flow through className.
	const style = { width, height };
	return (
		<div
			style={style}
			className={`rounded-md bg-surface-canvas-deep${className ? ` ${className}` : ""}`}
		/>
	);
}
