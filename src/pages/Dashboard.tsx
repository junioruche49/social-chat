import { faComments } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Text from "../shared/components/ui/Text";

export default function Dashboard() {
	return (
		<div className="flex flex-col gap-3 items-center justify-center w-full">
			<div className="w-[50%] flex flex-col items-center">
				<FontAwesomeIcon
					icon={faComments}
					className="text-brand-secondary-500 text-3xl"
					size="5x"
				/>
				<Text type="h6" tone="secondary" className="font-extrabold  text-xl">
					Select a friend to start chatting
				</Text>
			</div>
		</div>
	);
}
