import axios from "axios";
import useAuthStore from "@/store/useAuthStore";
import { refreshToken } from "./fetchApi";

export default axios.create({
	headers: { "Content-Type": "application/json" },
});

export const axiosApiInstance = axios.create({
	headers: { "Content-Type": "application/json" },
});

axiosApiInstance.interceptors.request.use(async (config) => {
	  const accessToken = useAuthStore.getState().accessToken;

	if (accessToken) {
		config.headers!.Authorization = accessToken
			? `Bearer ${accessToken}`
			: "";
	}

	return config;
});

// // Response interceptor for API calls
axiosApiInstance.interceptors.response.use(
	(response) => {
		return response;
	},
	async (error) => {
		const originalRequest = error.config;
		if (error?.response?.status === 401 && !originalRequest._retry) {
			
			const accessToken = useAuthStore.getState().accessToken;
			const refreshTok = useAuthStore.getState().refreshToken;

			try {
			const getNewToken = await refreshToken(accessToken!, refreshTok!);
			useAuthStore.setState({accessToken: getNewToken.token, refreshToken: getNewToken.refreshToken,
				user: getNewToken.user, isAuthenticated: true})
			
			const access_token = getNewToken.token;
			originalRequest._retry = true;
			originalRequest.headers["Authorization"] = "Bearer " + access_token;
			axios.defaults.headers.common["Authorization"] = "Bearer " + access_token;
			return axios(originalRequest);
			} catch (error) {
				useAuthStore.getState().logout();
				return Promise.reject(error);
			}
		}
		return Promise.reject(error);
	},
);
