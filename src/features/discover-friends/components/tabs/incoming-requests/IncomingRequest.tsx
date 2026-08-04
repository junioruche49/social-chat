import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useAcceptRequest } from "@/features/discover-friends/mutations/useAcceptRequest";
import { useRejectRequest } from "@/features/discover-friends/mutations/useRejectRequest";
import { useGetIncomingRequests } from "@/features/discover-friends/queries/useGetIncomingRequests";
import type { IncomingRequestsResponse } from "@/features/discover-friends/types/requests";
import Loading from "@/shared/components/ui/Loading";
import Text from "@/shared/components/ui/Text";

export default function IncomingRequest() {
	const { data: friendsList, isLoading, isError } = useGetIncomingRequests();
	const { mutate: acceptRequest } = useAcceptRequest();
	const { mutate: rejectRequest } = useRejectRequest();

	if (isLoading) {
		return <Loading />;
	}
	if (isError) {
		return <div>Error: {isError}</div>;
	}

	const onAcceptRequestHandler = (requestId: string) => {
		acceptRequest(requestId);
	};
	const onRejectRequestHandler = (requestId: string) => {
		rejectRequest(requestId);
	};
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
						(friend: Pick<IncomingRequestsResponse, "sender">) => (
							<div
								key={friend.sender.id}
								className="bg-white p-5 rounded-2xl border border-slate-200 shadow-xs hover:shadow-md transition flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
							>
								<div
									key={friend.sender.firstName}
									className="flex items-start gap-4 flex-1 min-w-0"
								>
									<div className="flex items-center gap-3">
										<div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold text-lg">
											{friend.sender.lastName[0].toUpperCase()}
										</div>
										<div>
											<h4 className="font-bold text-slate-800 text-sm">
												{friend.sender.firstName} {friend.sender.lastName}
											</h4>
											<p className="text-xs text-slate-500 wrap-anywhere">
												{friend.sender.email}
											</p>
											<p className="text-[11px] text-slate-400 mt-0.5">
												0 mutual friends
											</p>
										</div>
									</div>
								</div>
								<div className="flex items-center gap-2 w-full sm:w-auto shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
									<button
										type="button"
										onClick={() => onAcceptRequestHandler(friend.sender.id)}
										className="flex-1 sm:flex-initial bg-indigo-600 hover:bg-indigo-700 text-white px-5 py-2.5 rounded-xl font-semibold text-sm transition shadow-xs flex items-center justify-center gap-2"
									>
										<i className="fa-solid fa-user-check"></i> Accept
									</button>
									<button
										type="button"
										onClick={() => onRejectRequestHandler(friend.sender.id)}
										className="flex-1 sm:flex-initial bg-slate-100 hover:bg-rose-50 text-slate-700 hover:text-rose-600 px-4 py-2.5 rounded-xl font-semibold text-sm border border-slate-200 hover:border-rose-200 transition flex items-center justify-center gap-1.5"
									>
										<i className="fa-solid fa-user-xmark"></i> Reject
									</button>
								</div>
							</div>
						),
					)}
				</div>
			</div>
		</div>
	);
}
