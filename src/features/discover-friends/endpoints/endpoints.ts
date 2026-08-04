import { httpBasrUrl } from "@/api/httpContext";
import { ApiServiceFacade } from "@/shared/services/ApiServiceFacade";
import type { User } from "@/shared/types/user";
import type { IncomingRequestsResponse, SentRequestsResponse } from "../types/requests";

const apiServiceFacade = new ApiServiceFacade(httpBasrUrl);

export const getDiscoverPeople = async () => {
	const response = (await apiServiceFacade.get({
		path: `/api/friendship/discover`,
	})) as { data: User[] };
	return response.data;
};

export const sendRequest = async (receiverId: string) => {
	return await apiServiceFacade.post(`/api/friendship/send-request/${receiverId}`);
};

export const getSentRequests = async () => {
	const response = (await apiServiceFacade.get({
		path: `/api/friendship/sent-requests`,
	})) as { data: SentRequestsResponse[] };
	return response.data;
};

export const getIncomingRequests = async () => {
    const response = (await apiServiceFacade.get({
        path: `/api/friendship/received-requests`})) as { data: IncomingRequestsResponse[] };
    return response.data;

}

export const acceptRequest = async (requestId: string) => {
    return await apiServiceFacade.post(`/api/friendship/accept-request/${requestId}`);
}

export const rejectRequest = async (requestId: string) => {
    return await apiServiceFacade.post(`/api/friendship/reject-request/${requestId}`);
}