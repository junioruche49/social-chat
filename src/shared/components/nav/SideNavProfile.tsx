import { faBell } from "@fortawesome/free-regular-svg-icons";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Link } from "react-router-dom";
import Avatar from "../ui/Avatar";
import Text from "../ui/Text";

export default function SideNavProfile() {
	return (
		<div className="flex flex-row w-full items-center p-3.5  border-b border-brand-secondary-500">
			<div className="flex flex-row items-center">
				<Avatar initials="U" className="p-3" size="sm" />
				<Text
					type="h6"
					tone="none"
					className="font-extrabold text-black text-sm ml-2 mr-3"
				>
					uche eberechukwu
				</Text>
			</div>
			<div className="flex flex-row flex-1 w-full gap-1 justify-end">
				<FontAwesomeIcon
					icon={faBell}
					size="lg"
					className="text-brand-secondary"
				/>
				<Link to="/login">
					<FontAwesomeIcon
						icon={faArrowRightFromBracket}
						className="text-brand-secondary"
						size="lg"
					/>
				</Link>
			</div>
		</div>
	);
}
