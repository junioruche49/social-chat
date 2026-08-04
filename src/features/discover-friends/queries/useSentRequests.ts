import { useQuery } from "@tanstack/react-query";
import { getSentRequests } from "../endpoints/endpoints";

export const useSentRequests = () => {
	return useQuery({
		queryKey: ["sent-requests"],
		queryFn: () => getSentRequests(),
	});
};
