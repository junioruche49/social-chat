// import { axiosApiInstance } from "@/libs/axios";
import type { ResponseType } from "axios";
import { axiosApiInstance } from "@/api/axios";

interface GetArgs {
	path: string;
	responseType?: ResponseType;
	globalFilters?: Record<string, string | undefined>;
}
export class ApiServiceFacade {
	url: string;

	constructor(url: string) {
		this.url = url;
	}

	handleResponse(response: unknown) {
		if (response) {
			return response;
		} else {
			return Promise.reject({
				status: 404,
				message: "Something went wrong",
				statusText: "Error",
			});
		}
	}

	async get({
		path,
		responseType = "json",
		globalFilters,
	}: GetArgs): Promise<unknown> {
		
		return await axiosApiInstance(`${this.url}${path}`, {
			method: "GET",
			responseType: responseType,
			headers: {
				...globalFilters,
			},
		}).then(this.handleResponse);
	}

	async post(
		path: string,
		body: unknown = {},
		contentType = "application/json",
		responseType = "json" as ResponseType,
	) {
		return await axiosApiInstance(`${this.url}${path}`, {
			method: "POST",
			data: body,
			responseType,
			headers: {
				"Content-Type": contentType,
			},
		}).then(this.handleResponse);
	}

	async put(
		path: string,
		body: unknown = {},
		contentType = "application/json",
		responseType = "json" as ResponseType,
	) {
		return await axiosApiInstance(`${this.url}${path}`, {
			method: "PUT",
			data: body,
			responseType,
			headers: {
				"Content-Type": contentType,
			},
		}).then(this.handleResponse);
	}

	async patch(
		path: string,
		body: unknown = {},
		contentType = "application/json",
		responseType = "json" as ResponseType,
	) {
		return await axiosApiInstance(`${this.url}${path}`, {
			method: "PATCH",
			data: body,
			responseType,
			headers: {
				"Content-Type": contentType,
			},
		}).then(this.handleResponse);
	}

	async delete(path: string) {
		return await axiosApiInstance(`${this.url}${path}`, {
			method: "DELETE",
		}).then(this.handleResponse);
	}
}
