import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSentRequests } from "@/features/discover-friends/queries/useSentRequests";
import type { SentRequestsResponse } from "@/features/discover-friends/types/requests";
import Loading from "@/shared/components/ui/Loading";
import Text from "@/shared/components/ui/Text";

export default function SentRequests() {
	const { data: friendsList, isLoading, isError } = useSentRequests();

	if (isLoading) {
		return <Loading />;
	}
	if (isError) {
		return <div>Error: {isError}</div>;
	}

	return (
		<div className="p-6 overflow-y-auto flex-1 w-full">
			<div className="relative mb-8 max-w-2xl mx-auto">
				<FontAwesomeIcon
					icon={faSearch}
					size="sm"
					className="absolute left-4 top-4 text-slate-400"
				/>
				<input
					type="text"
					id="friend-search-input"
					className="w-full pl-11 pr-4 py-3.5 bg-white border border-slate-200 shadow-sm rounded-xl focus:ring-2 focus:ring-indigo-500 focus:outline-none text-slate-700"
					placeholder="Search by username, email, or phone..."
				></input>
			</div>
			<div className="max-w-2xl mx-auto">
				<Text
					tone="none"
					type="h4"
					className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-4"
				>
					Suggested For You
				</Text>
				<div
					id="suggested-friends-list"
					className="grid grid-cols-1 md:grid-cols-1 "
				>
					{friendsList?.map(
						(friend: Pick<SentRequestsResponse, "receiver">) => (
							<div
								key={friend.receiver.firstName}
								className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition"
							>
								<div className="flex items-center gap-3">
									<div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold text-lg">
										{friend.receiver.lastName[0].toUpperCase()}
									</div>
									<div>
										<h4 className="font-bold text-slate-800 text-sm">
											{friend.receiver.firstName} {friend.receiver.lastName}
										</h4>
										<p className="text-xs text-slate-500 wrap-anywhere">
											{friend.receiver.email}
										</p>
										<p className="text-[11px] text-slate-400 mt-0.5">
											0 mutual friends
										</p>
									</div>
								</div>
							</div>
						),
					)}
				</div>
			</div>
		</div>
	);
}
