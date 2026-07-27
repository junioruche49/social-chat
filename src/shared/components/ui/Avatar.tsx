import Text from "./Text";

type Size = "sm" | "md" | "lg";

const sizeClass: Record<Size, string> = {
	sm: "h-8 w-8",
	md: "h-10 w-10",
	lg: "h-14 w-14",
};

type Props = {
	initials: string;
	className?: string;
	size?: Size;
};
export default function Avatar({ initials, className, size = "md" }: Props) {
	return (
		<div
			className={`bg-brand-secondary-500 opacity-100 rounded-full flex text-center items-center justify-center font-bold ${sizeClass[size]} ${className}`}
		>
			<Text
				tone="primary"
				type="h1"
				className={`font-bold text-base! text-brand-primary! `}
			>
				{initials}
			</Text>
		</div>
	);
}
