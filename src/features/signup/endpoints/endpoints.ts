import { httpBasrUrl } from "@/api/httpContext";
import { ApiServiceFacade } from "@/shared/services/ApiServiceFacade";
import type { User } from "@/shared/types/user";

const apiServiceFacade = new ApiServiceFacade(httpBasrUrl);


export const signup = async (user: User) => {
	return apiServiceFacade.post(`/api/authentication/signup`, user);
};