import { faTimes, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Text from "../../../shared/components/ui/Text";

export default function DiscoverFriendsHeader() {
	return (
		<div className="flex flex-row w-full items-center p-2.5  border-b border-brand-secondary-500 ">
			<div className="bg-indigo-100 text-indigo-600 w-10 h-10 rounded-full flex items-center justify-center">
				<FontAwesomeIcon
					icon={faUserGroup}
					size="sm"
					className="text-brand-primary"
				/>
			</div>
			<div className="flex flex-col ml-2 items-start">
				<Text
					type="h6"
					tone="none"
					className="font-extrabold text-black text-sm ml-2 mr-3"
				>
					Discover Friends
				</Text>
			</div>
			<div className="flex flex-row flex-1 w-full gap-1 justify-end">
				<Link
					to="/dashboard"
					className="bg-brand-secondary-100 h-7 w-7 p-2 flex items-center justify-center rounded-full"
				>
					<FontAwesomeIcon
						icon={faTimes}
						size="xs"
						className="text-brand-secondary"
					/>
				</Link>
			</div>
		</div>
	);
}
