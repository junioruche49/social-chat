import { useMutation } from "@tanstack/react-query";
import type { User } from "@/shared/types/user";
import { signup } from "../endpoints/endpoints";

export const useSignup = () => {
	
	return useMutation({
		mutationFn: (user : User) => signup(user)
	});
};