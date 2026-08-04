import { httpBasrUrl } from "@/api/httpContext";
import { ApiServiceFacade } from "@/shared/services/ApiServiceFacade";
import type { Friends } from "../types/friends";

const apiServiceFacade = new ApiServiceFacade(httpBasrUrl);


export const getFriends = async () => {
	const response = (await apiServiceFacade.get({
		path: `/api/friendship/friends`,
	})) as { data: Friends[] };
	return response.data;

};