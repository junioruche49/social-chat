type Props = {
	name: string;
	type: string;
	value: string;
	label: string;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	className?: string;
	placeholder: string;
};

export default function CustomInput({
	name,
	type,
	value,
	onChange,
	label,
	className,
	placeholder,
}: Props) {
	return (
		<div className="flex flex-col gap-1 items-start">
			<label htmlFor={name} className="font-semibold text-black text-sm">
				{label}
			</label>
			<input
				type={type}
				placeholder={placeholder}
				className={`focus:border-brand-primary focus:ring-1 focus:outline-none border rounded-lg px-4 py-2 text-base font-normal pl-2
					 border-brand-tertiary w-full outline-0 flex focus:bg-white bg-white  placeholder:text-lg ${className}`}
				name={name}
				value={value}
				onChange={onChange}
			/>
		</div>
	);
}
