import { useQuery } from "@tanstack/react-query";
import { getGetChatHistory } from "../endpoints/endpoints";

export const useGetChatHistory = (receiverId: string) => {
	return useQuery({
		queryKey: ["chat-history", receiverId],
		queryFn: () => getGetChatHistory(receiverId),
	});
};
