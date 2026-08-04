import { useQuery } from "@tanstack/react-query";
import { getIncomingRequests } from "../endpoints/endpoints";

export const useGetIncomingRequests = () => {
	return useQuery({
		queryKey: ["incoming-requests"],
		queryFn: () => getIncomingRequests(),
	});
};
