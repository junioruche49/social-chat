type Props = {
	name: string;
	type: "button" | "submit" | "reset" | undefined;
	children: React.ReactNode;
	className?: string;
	onClick?: () => void;
};
export default function Button({
	name,
	type = "button",
	children,
	className,
	onClick,
}: Props) {
	return (
		<button
			className={`bg-brand-primary text-white w-full font-bold p-2 rounded-lg ${className}`}
			type={type}
			name={name}
			onClick={onClick}
		>
			{children}
		</button>
	);
}
