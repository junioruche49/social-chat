import {
	faSearch,
	faUserGroup,
	faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SideNavSearch() {
	return (
		<div className="w-full flex flex-col justify-center gap-4 p-3 border-b border-brand-secondary-500">
			<div className="flex flex-row gap-1">
				<Link
					to="/discover-friends"
					className="text-brand-primary border border-brand-secondary-500 text-sm font-bold p-1 bg-white rounded-lg  flex flex-1 items-center justify-center"
				>
					<FontAwesomeIcon
						icon={faUserPlus}
						className="text-brand-primary mr-2"
						size="sm"
					/>
					Requests
				</Link>
				<Link
					to="/discover-friends"
					className="text-brand-primary border border-brand-secondary-500 text-sm font-bold p-1 bg-white rounded-lg  flex flex-1 items-center justify-center"
				>
					<FontAwesomeIcon
						icon={faUserGroup}
						className="text-brand-primary mr-2"
						size="sm"
					/>
					Friends
				</Link>
			</div>
			<div className="relative">
				<FontAwesomeIcon
					icon={faSearch}
					className="absolute left-3 top-2.5 text-slate-400 text-sm"
					size="sm"
				/>
				<input
					placeholder="Search your chats..."
					className="w-full pl-9 pr-4 py-2 bg-slate-200 border-none rounded-lg text-sm focus:ring-2 focus:ring-indigo-500 focus:outline-none"
				/>
			</div>
		</div>
	);
}
