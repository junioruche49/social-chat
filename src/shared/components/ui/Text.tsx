type Props = {
	type: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p";
	tone: "primary" | "secondary" | "tertiary" | "none";
	children: React.ReactNode;
	className?: string;
};

const toneClasses: Record<Props["tone"], string> = {
	primary: "text-brand-primary",
	secondary: "text-brand-secondary",
	tertiary: "text-brand-tertiary",
	none: "",
};

export default function Text({ type, tone, children, className = "" }: Props) {
	const Element = type;

	return (
		<Element className={`${toneClasses[tone]} ${className}`}>
			{children}
		</Element>
	);
}
