import { Link } from "react-router-dom";
import Avatar from "../ui/Avatar";
import Text from "../ui/Text";

const links = [
	{ id: 121212, name: "john doe", message: "hello", date: "Just now" },
	{
		id: 232434,
		name: "uche eberechukwu",
		message: "uche eberechukwu",
		date: "Yesterday",
	},
];

export default function SideNavLinks() {
	return (
		<nav>
			{links.map((link) => (
				<Link
					key={link.id}
					to={`/${link.id}`}
					className="flex flex-row items-center p-3  border-b border-brand-secondary-500"
				>
					<Avatar
						initials={link.name[0].toUpperCase()}
						size="md"
						className="p-2"
					/>
					<div className="flex flex-col ml-2 items-start">
						<Text
							type="h6"
							tone="none"
							className="font-bold text-black text-xs  mr-3"
						>
							{link.name}
						</Text>
						<Text
							type="h6"
							tone="secondary"
							className="font-normal text-xs mr-3"
						>
							{link.message}
						</Text>
					</div>
					<div className="flex flex-row flex-1 w-full gap-1 justify-end">
						<Text type="p" tone="secondary" className="text-xs">
							{link.date}
						</Text>
					</div>
				</Link>
			))}
		</nav>
	);
}
