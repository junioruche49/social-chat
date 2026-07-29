import axios from "@/api/axios";
import { httpBasrUrl } from "@/api/httpContext";
import type { User } from "@/shared/types/user";



export const login = async (user: Omit<User, "passwordConfirm"|"bio"|"firstName"|"lastName"> ) => {
	return axios.post(`${httpBasrUrl}/api/authentication/login`, user);
};