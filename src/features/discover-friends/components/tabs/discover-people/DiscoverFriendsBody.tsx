import { faPlus, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useQueryClient } from "@tanstack/react-query";
import { useState } from "react";
import { useSendRequest } from "@/features/discover-friends/mutations/useSendRequest";
import { useGetDiscoverPeople } from "@/features/discover-friends/queries/useGetDiscoverPeople";
import Loading from "@/shared/components/ui/Loading";
import Text from "@/shared/components/ui/Text";
import useToast from "@/shared/hooks/useToast";
import type { User } from "@/shared/types/user";

export default function DiscoverFriendsBody() {
	const queryClient = useQueryClient();

	const { data: friendsList, isLoading, isError } = useGetDiscoverPeople();
	const { mutate: sendRequest } = useSendRequest();
	const { showError, showSuccess } = useToast();
	const [loading, setLoading] = useState(false);

	if (isLoading || loading) {
		return <Loading />;
	}
	if (isError) {
		return <div>Error: {isError}</div>;
	}

	const onSendRequest = (receiverId: string) => {
		sendRequest(receiverId, {
			onSuccess: onSaveSuccess,
			onError: onSaveError,
		});
	};
	const onSaveSuccess = () => {
		setLoading(false);
		queryClient.invalidateQueries({ queryKey: ["discover-people"] });
		showSuccess("Request sent successfully!");
	};

	const onSaveError = () => {
		setLoading(false);
		showError("Error sending request!");
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
					className="grid grid-cols-1 md:grid-cols-2 gap-4"
				>
					{friendsList?.map((friend: User) => (
						<div
							key={friend.firstName}
							className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center justify-between hover:shadow-md transition"
						>
							<div className="flex items-center gap-3">
								<div className="w-12 h-12 bg-pink-100 text-pink-600 rounded-full flex items-center justify-center font-bold text-lg">
									{friend.lastName[0].toUpperCase()}
								</div>
								<div>
									<h4 className="font-bold text-slate-800 text-sm">
										{friend.firstName} {friend.lastName}
									</h4>
									<p className="text-xs text-slate-500 wrap-anywhere">
										{friend.email}
									</p>
									<p className="text-[11px] text-slate-400 mt-0.5">
										0 mutual friends
									</p>
								</div>
							</div>
							<button
								type="button"
								className="bg-indigo-50 text-indigo-600 hover:bg-indigo-600 hover:text-white px-4 py-2 rounded-lg 
                                text-sm font-semibold  flex flex-row  relative justify-between  items-center"
								onClick={() => onSendRequest(friend.id as string)}
							>
								<FontAwesomeIcon
									icon={faPlus}
									size="sm"
									className=" left-4 top-4 text-indigo-600"
								/>
								<Text type="p" tone="none">
									Add
								</Text>
							</button>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
