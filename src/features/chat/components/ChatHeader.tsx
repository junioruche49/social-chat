import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../../../shared/components/ui/Avatar";
import Text from "../../../shared/components/ui/Text";

export default function ChatHeader() {
	return (
		<div className="flex flex-row w-full items-center p-3  border-b border-brand-secondary-500 ">
			<Avatar initials="U" className="p-3" size="sm" />
			<div className="flex flex-col ml-2 items-start">
				<Text
					type="h6"
					tone="none"
					className="font-extrabold text-black text-sm ml-2 mr-3"
				>
					Alice Smith
				</Text>
				<Text
					type="h6"
					tone="none"
					className="font-light text-brand-primary-200 text-xs ml-2 mr-3 flex flex-row items-center gap-1"
				>
					<span className="p-1 h-1 w-1 bg-brand-primary-200 rounded-full"></span>
					Online
				</Text>
			</div>
			<div className="flex flex-row flex-1 w-full gap-1 justify-end">
				<FontAwesomeIcon
					icon={faEllipsisVertical}
					size="lg"
					className="text-brand-secondary"
				/>
			</div>
		</div>
	);
}
