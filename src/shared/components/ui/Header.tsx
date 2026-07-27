import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text from "@/shared/components/ui/Text";

type Props = {
	title: string;
	description: string;
};

export default function Header({ description, title }: Props) {
	return (
		<div className="flex flex-col items-center mb-4 gap-1">
			<div className="bg-brand-primary rounded-full p-3">
				<FontAwesomeIcon icon={faComments} color="white" size="lg" />
			</div>
			<Text
				type="h6"
				tone="none"
				className="font-extrabold text-black text-2xl"
			>
				{title}
			</Text>
			<Text
				type="p"
				tone="secondary"
				className="text-center text-black text-sm"
			>
				{description}
			</Text>
		</div>
	);
}
