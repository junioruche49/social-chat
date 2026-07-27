type Props = {
	children: React.ReactNode;
	className?: string;
};
export default function Card({ children, className = "" }: Props) {
	return (
		<div
			className={`rounded-2xl shadow-2xl relative w-full  bg-white ${className}`}
		>
			{children}
		</div>
	);
}
