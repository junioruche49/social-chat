import { Link } from "react-router-dom";
import { useGetFriends } from "@/shared/queries/useGetFriends";
import useAuthStore from "@/store/useAuthStore";
import Avatar from "../ui/Avatar";
import Loading from "../ui/Loading";
import Text from "../ui/Text";

export default function SideNavLinks() {
	const { data: friendsList, isLoading, isError } = useGetFriends();
	const user = useAuthStore((state) => state.user);
	const friends = friendsList?.map((friend) => {
		if (friend.receiverId === user?.id) return friend.sender;
		else return friend.receiver;
	});
	if (isLoading) {
		return <Loading />;
	}
	if (isError) {
		return <div>Error: {isError}</div>;
	}
	return (
		<nav>
			{friends?.map((friend) => (
				<Link
					key={friend.id}
					to={`/chat/${friend.id}`}
					className="flex flex-row items-center p-3  border-b border-brand-secondary-500"
				>
					<Avatar
						initials={friend.lastName[0].toUpperCase()}
						size="md"
						className="p-2"
					/>
					<div className="flex flex-col ml-2 items-start">
						<Text
							type="h6"
							tone="none"
							className="font-bold text-black text-xs  mr-3"
						>
							{friend.firstName} {friend.lastName}
						</Text>
						{/* <Text
							type="h6"
							tone="secondary"
							className="font-normal text-xs mr-3"
						>
							{link.message}
						</Text> */}
					</div>
					<div className="flex flex-row flex-1 w-full gap-1 justify-end">
						<Text type="p" tone="secondary" className="text-xs">
							{friend.updatedAt}
						</Text>
					</div>
				</Link>
			))}
		</nav>
	);
}
