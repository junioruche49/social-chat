
import useAuthStore from "@/stores/useAuthStore";

const BASE_URL = import.meta.env.VITE_API_URL;



export async function refreshToken(accessToken: string, refreshToken: string) {
	

	const formData = {
		refreshToken: refreshToken,
		token: accessToken,
	}
	try {
		const res = await fetch(`${BASE_URL}/api/auth/RefreshToken`, {
			method: "POST",
			body: JSON.stringify(formData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (res.status === 401 || res.status === 400) {
			useAuthStore.getState().logout();
			return Promise.reject("error occured");
		}
		const data = await res.json();

		return data;
	} catch (error) {
		console.error("Error refreshing token:", error);
		return Promise.reject("error occured");
	}
}
