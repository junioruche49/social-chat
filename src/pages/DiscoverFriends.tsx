import Tabs from "@/features/discover-friends/components/tabs";
import DashboardLayout from "@/shared/components/layout/DashboardLayout";
import DiscoverFriendsHeader from "../features/discover-friends/components/DiscoverFriendsHeader";

export default function DiscoverFriends() {
	return (
		<DashboardLayout>
			<div className="flex flex-col w-full items-start  relative">
				<DiscoverFriendsHeader />
				<Tabs />
			</div>
		</DashboardLayout>
	);
}
