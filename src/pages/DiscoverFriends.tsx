import DiscoverFriendsBody from "../features/discover-friends/components/DiscoverFriendsBody";
import DiscoverFriendsHeader from "../features/discover-friends/components/DiscoverFriendsHeader";

export default function DiscoverFriends() {
	return (
		<div className="flex flex-col w-full items-start  relative">
			<DiscoverFriendsHeader />
			<DiscoverFriendsBody />
		</div>
	);
}
