import { faSearch, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

export default function SideNavSearch() {
	return (
		<div className="w-full flex flex-col justify-center gap-4 p-3 border-b border-brand-secondary-500">
			<Link
				to="discover-friends"
				className="text-brand-primary border border-brand-secondary-500 text-base font-bold p-2 bg-white rounded-lg  flex flex-1 items-center justify-center"
			>
				<FontAwesomeIcon
					icon={faUserPlus}
					className="text-brand-primary mr-2"
					size="sm"
				/>
				Find & Add Friends
			</Link>
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
